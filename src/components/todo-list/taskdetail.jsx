import React from 'react'
import { useParams } from 'react-router-dom';

const Taskdetail = () => {
    const {taskId, task} = useParams()
  return (
    <div>
      <h1> You are viewing Task detail {task} of Task {taskId}</h1>
    </div>
  )
}

export default Taskdetail;
