import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from './todo-list/todoContext';


const Dashboard = () => {
  const { todolist } = useContext(TodoContext);
  const totalTasks = todolist.length;
  const completedTasks = todolist.filter((todo) => todo.taskStatus === true).length;
  const pendingTasks = todolist.filter((todo) => todo.taskStatus === false).length;
return (
  <div className='container my-5'>
      <div className='row'>
        <div className='col-md-4'> 
        <div class="card text-bg-primary mb-3">
          <div class="card-header">All Tasks</div>
          <div class="card-body">
            <h5 class="card-title">{totalTasks}</h5>
          </div>
        </div>
        </div>
        <div className='col-md-4'> 
          <div class="card text-bg-success mb-3">
            <div class="card-header">Completed</div>
            <div class="card-body">
              <h5 class="card-title">{completedTasks}</h5>
            </div>
          </div>
        </div>
        <div className='col-md-4'> 
          <div class="card text-bg-secondary mb-3">
            <div class="card-header">Pending</div>
            <div class="card-body">
              <h5 class="card-title">{pendingTasks}</h5>
            </div>
          </div>
        </div>

      </div>
  </div>
)
}

export default Dashboard;