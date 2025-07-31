import './todo.scss';
import React, { useState } from 'react';

function Todo(props) {
     const [todo, setTodo] = useState('');
     const [todolist, setTodolist] = useState([]);

    const todoStatus = (key) => {
        const updateList = todolist.map((todo) => todo.key === key ? {...todo, taskStatus: !todo.taskStatus} : todo);
        setTodolist(updateList);
    }

    const deleteTodo = (key) => {
        const otherList =  todolist.filter((todo) => todo.key !== key)
        setTodolist(otherList);
    }

    const TodoText = (e) => {
        setTodo(e.target.value);
    }

    const addtodo = (e) => {
         e.preventDefault();
        const todoValue = todo;

        if(todoValue) {
            const newEntry = {
                key: new Date().getTime(),
                text: todoValue,
                taskStatus: false
            }
            setTodolist([...todolist, newEntry]);
        } else {
            alert ('please enter todo task')
        }

        setTodo('');

    }
    return (
        <div className='container mt-5'>
            <form className="row g-3 justify-content-center" onSubmit={addtodo}>
                <div className="col-8">
                    <label htmlFor="addTodo" className="form-label">Add into todo list</label>
                    <input type="text" onChange={TodoText} value={todo} className="form-control" id="addTodo" placeholder="Todo task" />
                </div>
    
                <div className="col-8">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>

            <div className='row mt-5 justify-content-center'>
                <div className='col-8'>
                    <div>
                        <div><h2 className='text-center my-5'>My {props.name}</h2></div>
                        <table className="table  todo-table table-primary table-striped-columns">
                            <thead>
                                <tr>
                                    <th className='width-50' scope="col">#</th>
                                    <th scope="col">Tasks</th>
                                    <th className='width-150 text-center' scope="col">Complete</th>
                                    <th className='width-150 text-center ' scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todolist.map((td, index) => 
                                    <tr key={td.key} className={td.taskStatus ? 'active' :'not-active'}>
                                        <td>{td.srnum} {index +1}</td>
                                        <td><b>{td.text}</b></td>
                                        <td className='text-center'>
                                            <input class="form-check-input" type="checkbox" checked={td.taskStatus} onChange={() =>todoStatus(td.key)} />
                                        </td>
                                        <td className='text-center'>
                                            <button className='btn btn-danger' onClick={() => deleteTodo(td.key)}>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;