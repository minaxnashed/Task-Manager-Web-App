// Form for adding a new task
import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  // State for input value
  const [value, setValue] = useState('');

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  // Render the input and button
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '16px' }}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;