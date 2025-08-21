import React from 'react';

function FilterTasks({ checkStatus, setCheckStatus, search, setSearch }) {
  return (
      <div className='align-items-center my-5 row'>
        <div className='col-2 w-auto'>
          <label>Filter by status: </label>
        </div>
        <div className='col-2 w-auto'>
          <select
            className='form-select form-select-md'
            value={checkStatus}
            onChange={(e) => setCheckStatus(e.target.value)}
          >
            <option value='all'>All</option>
            <option value='true'>Completed</option>
            <option value='false'>Pending</option>
          </select>
        </div>
        <div className='col-2 text-right'>
          <label>Search by task title:</label>
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
  );
}

export default FilterTasks;
