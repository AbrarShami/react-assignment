import React, { useState, useContext } from 'react';

import TodoForm from './TodoForm';
import Tasklist from './creatTasklist';
import { TodoContext } from './todoContext';
import FilterTasks from './filterTasklist';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [updateTodotext, setupdateTodotext] = useState('');
  const { todolist, setTodolist } = useContext(TodoContext);

  // filter states
  const [checkStatus, setCheckStatus] = useState('all');
  const [search, setSearch] = useState('');

  // filtering logic
  const filteredList = todolist.filter((todo) => {
    if (checkStatus !== 'all' && todo.taskStatus.toString() !== checkStatus) {
      return false;
    }
    if (search.trim() !== '' && !todo.text.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const todoStatus = (key) => {
    const updateList = todolist.map((todo) =>
      todo.key === key ? { ...todo, taskStatus: !todo.taskStatus } : todo
    );
    setTodolist(updateList);
  };

  const deleteTodo = (key) => {
    const otherList = todolist.filter((todo) => todo.key !== key);
    setTodolist(otherList);
  };

  const editTodo = (key) => {
    const editStatus = todolist.map((todo) =>
      todo.key === key ? { ...todo, edit: true } : todo
    );
    const currenttodoText = todolist.find((todo) => todo.key === key);
    setupdateTodotext(currenttodoText.text);
    setTodolist(editStatus);
  };
  const TodoDescription = (e) => setTodoDescription(e.target.value);

  const TodoText = (e) => setTodo(e.target.value);

  const updateText = (e) => setupdateTodotext(e.target.value);

  const updateTodo = (key) => {
    if (updateTodotext) {
      const updateTodo = todolist.map((todo) =>
        todo.key === key ? { ...todo, text: updateTodotext, edit: false } : todo
      );
      setTodolist(updateTodo);
    } else {
      alert('please update todo task');
    }
  };

  const addtodo = (e) => {
    e.preventDefault();
    if (todo && todoDescription) {
      const newEntry = {
        key: new Date().getTime(),
        text: todo,
        description: todoDescription,
        taskStatus: false,
      };
      setTodolist([...todolist, newEntry]);
    } else {
      alert('please enter Task');
    }
    setTodo('');
    setTodoDescription('')
  };

  return (
    <div className='container todo-container'>
      
      <div className='row  justify-content-center'>
        <div className='col-10'>
          <div>
              <div className='row my-5'>
                <div className='col-8'><h2>My Todolist</h2></div>
                <div className='col-4 d-flex justify-content-end'><TodoForm todo={todo} todoDescription={todoDescription} onTitleChange={TodoText} onDescriptioChange={TodoDescription} onSubmit={addtodo} /></div>
              </div>
            {todolist.length > 0 && (
                <FilterTasks checkStatus={checkStatus} setCheckStatus={setCheckStatus} search={search} setSearch={setSearch} />
            )}
            <table className="table todo-table table-primary table-striped-columns">
              <tbody>
                <Tasklist todolist={filteredList} description={todoDescription}  editTodo={editTodo} todoStatus={todoStatus} updateTodo={updateTodo} deleteTodo={deleteTodo} updateText={updateText} updateTodotext={updateTodotext} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
