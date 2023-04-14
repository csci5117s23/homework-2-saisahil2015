import { useState } from 'react';
import styles from '../styles/ToDoList.module.css';
import { putTask } from '@/modules/data';

export default function Todo({ todo, checked }) {
  const API_ENDPOINT = 'https://backend-sumc.api.codehooks.io/dev/toDo';
  const API_KEY = 'a80b0c50-8253-4977-b9ef-71122f66ff97';

  async function handleCheck(todo) {
    const updatedTask = {
      id: todo._id,
      info: todo.info,
      checked: true,
      createdOn: todo.createdOn,
    };
    console.log("Here's the new task: ", updatedTask);
    await putTask(updatedTask);
  }

  return checked ? (
    <div className={styles.todo}>
      {info}
      <label>
        <input type='checkbox' checked />
      </label>
    </div>
  ) : (
    <div className={styles.todo}>
      {todo.info}
      <label>
        <input
          type='checkbox'
          value={todo.info}
          onClick={() => handleCheck(todo)}
        />
      </label>
    </div>
  );
}
