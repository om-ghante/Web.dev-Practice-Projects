import React, { useState } from 'react'

const ToDoApp = () => {
  const [ Task , setTask ] = useState('');

  const HandleAdd = () => {
    
  }

  return (
    <>
      <div className='todo-container'>
          <div className='todo-leftcontainer'>
            <h2>Add To Do...</h2>
            <textarea 
              type="text"
              placeholder="Enter Your Task"
              name="Task"
              value={Task}
              onChange={(e) => setTask(e.target.value)} 
            />
            <button onClick={HandleAdd}>
              Add To Do
            </button>
            
            <div className='text-intro-div'>
                <p>&copy; Om Ghante 2024 | Copyrights Not Reserved</p>
                <p>Made With &hearts; by Om Ghante</p>
                <p>Code for this you can find <a href="https://github.com/om-ghante/Web.dev-Practice-Projects/tree/main/Reacjs-Projects/To-do-app" target='_blank' title="It Will Redirect to Github"> here</a></p>
            </div>
          </div>
          <div className='todo-rightcontainer'>
            <h1>Om Ghante</h1>
          </div>
      </div>

    </>
  )
}

export default ToDoApp
