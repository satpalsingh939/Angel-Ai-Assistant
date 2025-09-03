// const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
const BACKEND = import.meta.env.VITE_BACKEND_URL || 'https://angel-ai-assistant.onrender.com';


export async function api(path, opts = {}) { 
  const token = localStorage.getItem('token');
  const headers = opts.headers || {};
  if (token) headers['Authorization'] = 'Bearer ' + token;
  headers['Content-Type'] = 'application/json';
  const res = await fetch(BACKEND + path, { ...opts, headers });
  return res.json();
}
  