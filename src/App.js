import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { fetchTasks, addTask as addTaskService, deleteTask as deleteTaskService, toggleTask as toggleTaskService } from './services/TaskService';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        alert(error.message);
      }
    };
    loadTasks();
  }, []);

  const addTask = async name => {
    try {
      const newTask = await addTaskService(name);
      setTasks([...tasks, newTask]);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleToggleTask = async id => {
    try {
      const updatedTask = await toggleTaskService(id);
      setTasks(tasks =>
        tasks.map(task =>
          task.id === id ? updatedTask : task
        )
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteTask = async id => {
    try {
      await deleteTaskService(id);
      setTasks(tasks => tasks.filter(task => task.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Task List
        </h2>
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      </header>
    </div>
  );
}

export default App;
