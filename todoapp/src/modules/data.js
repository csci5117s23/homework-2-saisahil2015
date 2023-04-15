//Hub of all REST APIs
const API_ENDPOINT = 'https://backend-sumc.api.codehooks.io/dev';

export async function getAllUncheckedTasks(authToken) {
  const response = await fetch(
    API_ENDPOINT + '/toDo?checked=false&sort=-createdOn',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

export async function getAllCheckedTasks(authToken) {
  const response = await fetch(
    API_ENDPOINT + '/toDo?checked=true&sort=-createdOn',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    }
  );
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
  await fetch(API_ENDPOINT + '/toDo/' + updatedTask._id, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });
}

export async function getAllCategories(authToken) {
  const response = await fetch(API_ENDPOINT + '/categories/', {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + authToken },
  });
  return await response.json();
}

export async function postCategory(authToken, newCategory) {
  await fetch(API_ENDPOINT + '/categories', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCategory),
  });
}

export async function getCategoryById(authToken, categoryId) {
  const response = await fetch(`${API_ENDPOINT}/categories/${categoryId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + authToken,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function getIncompleteTasksForCategory(authToken, category) {
  const response = await fetch(
    `${API_ENDPOINT}/toDo?category=${category}&checked=false&sort=-createdOn`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

export async function getCompleteTasksForCategory(authToken, category) {
  const response = await fetch(
    `${API_ENDPOINT}/toDo?category=${category}&checked=true&sort=-createdOn`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}
