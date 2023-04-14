//Hub of all REST APIs
const API_ENDPOINT = 'https://backend-sumc.api.codehooks.io/dev';

export async function getAllTasks(authToken) {
  const response = await fetch(API_ENDPOINT + '/toDo', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function getTaskById(authToken, taskId) {
  const response = await fetch(`${API_ENDPOINT}/toDo/${taskId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function postTask(authToken, newTask) {
  await fetch(API_ENDPOINT + '/toDo', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTask),
  });
}

export async function putTask(authToken, updatedTask) {
  await fetch(API_ENDPOINT + '/toDo/' + updatedTask.id, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });
}
