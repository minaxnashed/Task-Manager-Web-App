// Main application component
import React, { useState, useEffect } from 'react';
import './App.css';
// Import child components
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
// Import backend service functions
import { fetchTasks, addTask as addTaskService, deleteTask as deleteTaskService, toggleTask as toggleTaskService } from './services/TaskService';

function App() {
  // State for storing tasks
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend when component mounts
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

  // Add a new task
  const addTask = async name => {
    try {
      const newTask = await addTaskService(name);
      setTasks([...tasks, newTask]);
    } catch (error) {
      alert(error.message);
    }
  };

  // Toggle completion status of a task
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

  // Delete a task
  const handleDeleteTask = async id => {
    try {
      await deleteTaskService(id);
      setTasks(tasks => tasks.filter(task => task.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  // Render the UI
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Task List
        </h2>
        {/* Form to add new tasks */}
        <AddTaskForm onAdd={addTask} />
        {/* List of tasks with toggle and delete handlers */}
        <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
      </header>
    </div>
  );
}

export default App;
