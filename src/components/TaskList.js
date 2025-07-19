// Renders a list of TaskItem components
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {/* Map each task to a TaskItem */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;