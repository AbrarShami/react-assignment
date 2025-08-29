import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from './todo-list/todoContext';
import { ThemeContext } from './settings/ThemeContext';


const Dashboard = () => {
  const { todolist } = useContext(TodoContext);
  const { active } = useContext(ThemeContext);
  const totalTasks = todolist.length;
  const completedTasks = todolist.filter((todo) => todo.taskStatus === true).length;
  const pendingTasks = todolist.filter((todo) => todo.taskStatus === false).length;
return (
  <div className='container dasboard'>
      <div className='row my-5'>
        <div className='col-12 text-center'>
          <h1>Welcome to the Task Manager Dashboard</h1>
          <p className='lead'>Manage your tasks efficiently and stay organized!</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'> 
        <div class="card tasks-count bg-c-blue  text-bg-primary mb-3">
          <div class="card-header">All Tasks</div>
          <div class="card-body">
            <h2 class="card-title">{totalTasks}</h2>
          </div>
        </div>
        </div>
        <div className='col-md-4'> 
          <div class="card tasks-count bg-c-green text-bg-success mb-3">
            <div class="card-header">Completed</div>
            <div class="card-body">
              <h2 class="card-title">{completedTasks}</h2>
            </div>
          </div>
        </div>
        <div className='col-md-4'> 
          <div class="card tasks-count bg-c-pink text-bg-secondary mb-3">
            <div class="card-header">Pending</div>
            <div class="card-body">
              <h2 class="card-title">{pendingTasks}</h2>
            </div>
          </div>
        </div>

      </div>
      <div className='row mt-5'>
        <div className='col-12 text-center'>
          <div class="card p-4">
            <table class={`table table-${active}`}>
              <thead class={`thead-${active}`} theme={active}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Status</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                  {todolist.map((todo, index) => (
                    <tr key={todo.key}>
                      <th scope="row">{index + 1}</th>
                      <td>{todo.taskStatus ? (<span className='alert p-1 alert-success'>Completed</span>) : (<span className='alert p-1 alert-warning'>Pending</span>)}</td>
                      <td>{todo.text}</td>
                      <td>{todo.date}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
)
}

export default Dashboard;