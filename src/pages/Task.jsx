import React, { useState, useEffect } from 'react'
import { Navbar } from '../components';
import { TaskForm } from '../components'
import { fetchTasks } from '../utils/index.js';

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);


  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      if (data) {
        setTasks(data);
      }
    };

    loadTasks();
  }, []);



  return (

    <section className='sectionWithNavbar'>
      <Navbar />
      <div className="container mx-auto px-4">
        <div>
          <h1 className="text-3xl font-bold text-center my-8">Welcome to Your Tasks</h1>
          <button
            className="text-blue-500 border-[2px] p-3 rounded-full hover:bg-slate-400"
            onClick={() => setShowAddTaskForm(!showAddTaskForm)}
          >
            Add a Task
          </button>

          {showAddTaskForm && (
            <TaskForm
              setShowAddTaskForm={setShowAddTaskForm}
              tasks={tasks}
              setTasks={setTasks}
            />

          )}
        </div>

        {tasks ? tasks.map((task, index) => (


          <div key={index} Task={task} id={`note-${task.id}`} className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
            <p className="text-gray-700">{task.content}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">{task.createdAt}</span>
              <span className="text-sm text-gray-500">{task.dueBy}</span>
            </div>
            <div className="mt-4 flex justify-between items-center">
              
              <div className=' flex flex-row gap-2'>
                <button className="text-yellow-500 hover:text-yellow-700">Edit</button>
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
          </div>

        )) : ''}

      </div>
    </section>
  )
}
