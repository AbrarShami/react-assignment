import React, { useContext, useState, useEffect } from 'react';
import { TodoContext } from './todo-list/todoContext';

function Dashboard() {
  const { todolist, setTodolist } = useContext(TodoContext);

  const [list, setList] = useState([...todolist]);

  const [checkStatus, setCheckStatus] = useState('all');

  const [search, setSearch] = useState('');
  
  useEffect(() => {
    let filtered = [...todolist];

    if (checkStatus !== 'all') {
      filtered = filtered.filter(
        (todo) => todo.taskStatus.toString() === checkStatus
      );
    }

    if (search.trim() !== '') {
      filtered = filtered.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    setList(filtered);
  }, [checkStatus, search, todolist]);

  const todoStatus = (key) => {
    const updated = todolist.map((todo) =>
      todo.key === key ? { ...todo, taskStatus: !todo.taskStatus } : todo
    );
    setTodolist(updated); // update global state
  };

  return (
    <div className='container'>
      <div className='align-items-center my-5 row'>
        <div className='col-2'>
          <label>Filter by status: </label>
        </div>
        <div className='col-2'>
          <select
            className='form-select form-select-md mb-3'
            value={checkStatus}
            onChange={(e) => setCheckStatus(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='true'>Completed</option>
            <option value='false'>Pending</option>
          </select>
        </div>
        <div className='col-2'>
          <label>Search by task</label>
        </div>
        <div className='col-6'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='form-control'
            placeholder='Search task'
          />
        </div>
      </div>

      <table className='table todo-table table-primary table-striped-columns'>
        <tbody>
          {list.map((td, index) => (
            <tr key={td.key} className={td.taskStatus ? 'active' : 'not-active'}>
              <td className='width-50 text-center'>{index + 1}</td>
              <td className='text-center width-50'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  checked={td.taskStatus}
                  onChange={() => todoStatus(td.key)}
                />
              </td>
              <td className='text-center width-100'>
                <span>{td.taskStatus ? 'Completed' : 'Pending'}</span>
              </td>
              <td className={td.edit ? 'edit-todo' : ''}>
                <div className='todo-text text-center'>{td.text}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;