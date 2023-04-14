import { useState } from 'react';
import styles from '../styles/ToDoList.module.css';
import { putTask } from '@/modules/data';
import Link from 'next/link';

export default function Todo({ todo, checked }) {
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
      <Link href={`/todos:${todo._id}`}>{todo.info}</Link>
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
