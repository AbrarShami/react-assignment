import './todo.scss';
import React, { useState } from 'react';

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
            <form className="row g-3 align-items-end justify-content-center" onSubmit={addtodo}>
                <div className="col-7">
                    <h5>Add a new task</h5>
                    <input type="text" onChange={TodoText} value={todo} className="form-control" id="addTodo" placeholder="Todo task" />
                </div>
    
                <div className="col-1">
                    <button type="submit" className="btn  w-100 btn-primary">Add</button>
                </div>
            </form>

            <div className='row mt-5 justify-content-center'>
                <div className='col-8'>
                    <div>
                        {todolist.length > 0 ? <div><h2 className='text-center my-5'>My {props.name}</h2></div> : ''}
                       
                        <table className="table  todo-table table-primary table-striped-columns">

                            <tbody>
                                {todolist.map((td, index) => 
                                    <tr key={td.key} className={td.taskStatus ? 'active' :'not-active'}>
                                        <td className='width-50 text-center'>{td.srnum} {index +1}</td>
                                        <td className='text-center width-50'>
                                            <input className="form-check-input" type="checkbox" checked={td.taskStatus} onChange={() =>todoStatus(td.key)} />
                                        </td>    
                                        <td className={td.edit? 'edit-todo' : ''}>
                                            <div className='todo-text'><b>{td.text}</b></div>
                                            <div className='todo-update'> <input type="text" onChange={updateText}  value={updateTodotext} className="form-control" id="addTodo" placeholder="Todo task" /></div>
                                        </td>
                                        <td className={`text-center width-50 ${td.edit? 'edit-todo' : ''}`}>
                                            <button type="button" className="btn edit btn-primary" onClick={() => editTodo(td.key)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                                </svg>
                                            </button>
                                            <button type="button" className="btn save btn-success"onClick={() => updateTodo(td.key)}>
                                                <svg  width="20" height="20" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 5.75C3 4.23122 4.23122 3 5.75 3H15.7145C16.5764 3 17.4031 3.34241 18.0126 3.9519L20.0481 5.98744C20.6576 6.59693 21 7.42358 21 8.28553V18.25C21 19.7688 19.7688 21 18.25 21H5.75C4.23122 21 3 19.7688 3 18.25V5.75ZM5.75 4.5C5.05964 4.5 4.5 5.05964 4.5 5.75V18.25C4.5 18.9404 5.05964 19.5 5.75 19.5H6V14.25C6 13.0074 7.00736 12 8.25 12H15.75C16.9926 12 18 13.0074 18 14.25V19.5H18.25C18.9404 19.5 19.5 18.9404 19.5 18.25V8.28553C19.5 7.8214 19.3156 7.37629 18.9874 7.0481L16.9519 5.01256C16.6918 4.75246 16.3582 4.58269 16 4.52344V7.25C16 8.49264 14.9926 9.5 13.75 9.5H9.25C8.00736 9.5 7 8.49264 7 7.25V4.5H5.75ZM16.5 19.5V14.25C16.5 13.8358 16.1642 13.5 15.75 13.5H8.25C7.83579 13.5 7.5 13.8358 7.5 14.25V19.5H16.5ZM8.5 4.5V7.25C8.5 7.66421 8.83579 8 9.25 8H13.75C14.1642 8 14.5 7.66421 14.5 7.25V4.5H8.5Z" fill="#fff"></path>
                                                </svg>
                                            </button>
                                        </td>
                                        <td className='text-center width-50'>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteTodo(td.key)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                </svg>
                                            </button>
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