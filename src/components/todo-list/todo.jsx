import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { Link } from 'react-router-dom';
import Tasklist from './creatTasklist';

function Todo(props) {
     const [todo, setTodo] = useState('');
     const [updateTodotext, setupdateTodotext] = useState('');
     const [todolist, setTodolist] = useState([]);

    const todoStatus = (key) => {
        const updateList = todolist.map((todo) => todo.key === key ? {...todo, taskStatus: !todo.taskStatus} : todo);
        setTodolist(updateList);
    }

    const deleteTodo = (key) => {
        const otherList =  todolist.filter((todo) => todo.key !== key)
        setTodolist(otherList);
    }
    const editTodo = (key) => {
        const editStatus = todolist.map((todo) => todo.key === key ? {...todo, edit: true} :  todo);
        const currenttodoText =  todolist.filter((todo) => todo.key === key);
        setupdateTodotext(currenttodoText[0].text);
        setTodolist(editStatus);
    }

    const TodoText = (e) => {
        setTodo(e.target.value);
    }

    const updateText = (e) => {
        setupdateTodotext(e.target.value);
    }

    const updateTodo = (key) => {
        const updatedtext = updateTodotext;
        if (updatedtext) {
            const updateTodo = todolist.map((todo) => todo.key === key ? {...todo, text: updatedtext, edit:false} :  todo);
            setTodolist(updateTodo);
        } else {
            alert ('please update todo task')
        }

    }

    const addtodo = (e) => {
         e.preventDefault();
        const todoValue = todo;

        if(todoValue) {
            const newEntry = {
                key: new Date().getTime(),
                text: todoValue,
                taskStatus: false,
                edit: false
            }
            setTodolist([...todolist, newEntry]);
        } else {
            alert ('please enter todo task')
        }

        setTodo('');
    }
    return (
        <div className='container todo-container'>
            <TodoForm todo={todo} onChange={TodoText} onSubmit={addtodo} />

            <div className='row mt-5 justify-content-center'>
                <div className='col-8'>
                    <div>
                        {todolist.length > 0 ? <div><h2 className='text-center my-5'>My Todolist</h2></div> : ''}
                       
                        <table className="table  todo-table table-primary table-striped-columns">

                            <tbody>
                                <Tasklist editable={true} todolist={todolist} editTodo={editTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} updateText={updateText} updateTodotext={updateTodotext} todoStatus={todoStatus} />
                                {/* <Tasklist editable={false} todolist={todolist}  todoStatus={todoStatus} /> */}
                            </tbody>
                        </table>
                    </div>
                    {/* <Link to="/tasks/1">G to Task 1</Link> */}
                </div>
            </div>
        </div>
    );
}

export default Todo;