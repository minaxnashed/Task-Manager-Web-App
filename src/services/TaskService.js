const API_URL = 'http://localhost:5000/tasks';

export async function fetchTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch tasks');
  const data = await response.json();
  return data.map(task => ({
    id: task.id,
    name: task.title,
    isCompleted: task.isCompleted // <-- map isCompleted to completed
  }));
}

export async function addTask(name) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: name })
  });
  if (!response.ok) throw new Error('Failed to add task');
  const created = await response.json();
  return { id: created.id, name: created.title, isCompleted: false };
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok && response.status !== 204) throw new Error('Failed to delete task');
  return true;
}

export async function toggleTask(id) {
  const response = await fetch(`http://localhost:5000/tasks/${id}/toggle`, {
    method: 'PUT'
  });
  if (!response.ok) throw new Error('Failed to toggle task');
  const updated = await response.json();
  return {
    id: updated.id,
    name: updated.title,
    isCompleted: updated.isCompleted
  };
}