import { useState } from 'react';
import styles from '../styles/TodoList.module.css';
import { putTask } from '@/modules/data';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Todo({ todo, checked, onChange }) {
  const { getToken } = useAuth();

  async function handleCheck(todo) {
    const updatedTask = {
      id: todo._id,
      info: todo.info,
      checked: true,
      userId: todo.userId,
      createdOn: todo.createdOn,
    };
    console.log("Here's the new task: ", updatedTask);
    const token = await getToken({ template: 'codehooks' });
    await putTask(token, updatedTask);
    onChange();
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
      <Link href={`/todo/${todo._id}`}>{todo.info}</Link>
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
