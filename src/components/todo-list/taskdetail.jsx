import React, {useContext} from 'react'
import { useParams, Link } from 'react-router-dom';
import { TodoContext } from './todoContext';
const Taskdetail = () => {
    const {taskId} = useParams();
    const { todolist } = useContext(TodoContext);
     const task = todolist.find((t) => t.key.toString() === taskId);
  if (!task) {
    return <h2 className="text-center my-5">Task not found ❌</h2>;
  }
  return (
    <div className="container my-5 task-detail">
      <h1 className="mb-4">Task Detail</h1>
      <div className="card p-4 w-75 m-auto">
        <h3 >Title: {task.text}</h3>
        <p className='my-2'>Status: {task.taskStatus ? 'Completed' : 'Pending'}</p>
        <p>Description: {task.description || 'No description provided'}</p>
      </div>
      <Link to="/tasks" className="btn btn-secondary mt-3">Back to Tasks</Link>
    </div>
  )
}

export default Taskdetail;
