// API helper to make requests to the backend
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/api/tasks`, {
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to fetch tasks');
  return response.json();
};

export const addTask = async (title) => {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ title }),
  });
  if (!response.ok) throw new Error('Failed to add task');
  return response.json();
};

export const toggleTask = async (id) => {
  const response = await fetch(`${API_URL}/api/tasks/${id}/toggle`, {
    method: 'PATCH',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to toggle task');
  return response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/api/tasks/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!response.ok) throw new Error('Failed to delete task');
  return response.json();
};

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Failed to login');
  return response.json();
};

export const register = async (username, password) => {
  const response = await fetch(`${API_URL}/api/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) throw new Error('Failed to register');
  return response.json();
};