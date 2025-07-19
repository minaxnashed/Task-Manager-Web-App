import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`task-card${task.isCompleted ? ' task-isCompleted' : ''}`}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <span className="task-name">{task.name}</span>
      </div>
      <button
        onClick={e => { e.stopPropagation(); onDelete(task.id); }}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginLeft: '12px',
          color: '#888',
          fontSize: '1.2rem'
        }}
        aria-label="Delete task"
        title="Delete"
      >
        🗑️
      </button>
    </li>
  );
}

export default TaskItem;