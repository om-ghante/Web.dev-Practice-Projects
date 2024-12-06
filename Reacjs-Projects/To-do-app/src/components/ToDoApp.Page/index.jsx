import React, { useState } from 'react'

import ToDoItem from '../ToDoItem'

const Dashboard = () => {
  const [ newToDO, SetNewToDo ] = useState('');
  
  const HandleSubmit = () => {
    
  }

  return (
    <>
        <div>
          <input 
            type="text"
            name="newToDo"
            placeholder='Enter To Do'
            value={newToDO}
            onChange={(e) => SetNewToDo(e.target.value)}
          />
          <button onClick={HandleSubmit()}>
            Add
          </button>
        </div>
        <div>
          <ToDoItem tododata={data} />
        </div>
    </>
  )
}

export default Dashboard
