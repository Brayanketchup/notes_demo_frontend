import React, { useState, useEffect } from 'react'
import { Navbar, TaskCard } from '../components';
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
          <TaskCard key={index} Task={task} />
        )) : ''}

      </div>
    </section>
  )
}
