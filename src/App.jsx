import React, { useState } from 'react';

// STEP 1
// INITIALIZE REACT STATE FOR TODO AND TODOINPUT 
function Todo() {
  const [todo, setTodo] = useState([]);
  const [Input, setInput] = useState('');

// STEP 2
// CREATE A FUNCTION TO ADD TODO 
  const addTask = () => {
    // Check if the input is not empty
    if (Input.trim() !== '') {
      // Create a new task object and update todo state
      setTodo([...todo, { todo: Input, completed: false }]);
      // always clear the input field
      setInput('');
    }
  };

  // STEP 3
  // toggle task completion and map through the todo array
  const toggleTask = (index) => {
    const updatedlists = todo.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    // update the todo list with updates array of tasks
    setTodo(updatedlists);
  };
  //STEP 4
  //  CLEAR ALL LISTS AND SET THE TODO LIST TO EMPTY
  const clearAllTasks = () => {
    setTodo([]);
  };

  return (
    <div className='text-white bg-black h-screen flex items-center justify-center'>
      <div className='bg-blue-800 p-4 rounded-lg max-w-md w-full'>
        <label className='text-2xl  item-center text-bold'>
          To<span className='text-black text-bold'>Do📝</span>
        </label>
        <div>
          <input
            type='text'
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Input your task...'
            className='w-full border p-2 mt-2 rounded text-black'
          />
          <button className='py-2 px-4 bg-black m-2 text-white rounded' onClick={addTask}>
          Add +
          </button>
          <button className='mt-2 py-2 px-4 bg-black rounded' onClick={clearAllTasks}>
            Clear All🚮
          </button>
        </div>
        <div className='mt-4'>
         {todo.map((task, index) => (
             <div key={index} className='todoItem'>
              <input
                className='py-2'
                type='checkbox'
                id={`task-${index}`}
                checked={task.completed} 
                onChange={() => toggleTask(index)}
              />
              <label
                htmlFor={`task-${index}`}
                className={task.completed ? 'line-through text-gray-400' : ''} 
              >
                {task.todo}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
