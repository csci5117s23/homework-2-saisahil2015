//Hub of all REST APIs
const API_ENDPOINT = 'https://backend-sumc.api.codehooks.io/dev/toDo';
const API_KEY = ' a80b0c50-8253-4977-b9ef-71122f66ff97';

export async function getAllTasks() {
  const response = await fetch(API_ENDPOINT, {
    method: 'GET',
    headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}

export async function getTaskById(taskId) {
  const response = await fetch(`${API_ENDPOINT}?_id=${taskId}`, {
    method: 'GET',
    headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/json' },
  });
  const data = await response.json();
  return data;
}

export async function postTask(newTask) {
  await fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/json' },
  });
}

export async function putTask(updatedTask) {
  await fetch(API_ENDPOINT, {
    method: 'PUT',
    body: JSON.stringify(updatedTask),
    headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/json' },
  });
}
