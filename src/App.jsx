import React, { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [Input, setInput] = useState('');

  const addTask = () => {
    if (Input.trim() !== '') {
      setTasks([...tasks, { task: Input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
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
          {tasks.map((task, index) => (
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
                {task.task}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
