import styles from '../styles/TodoList.module.css';
import Button from './button';
import { useState } from 'react';

export default function TodoBuilder({ addTask }) {
  const [taskContent, setTaskContent] = useState('');

  function handleNewTask(e) {
    e.preventDefault();
    if (taskContent.trim().length === 0) return;
    addTask({ info: taskContent.trim(), checked: false });
    setTaskContent('');
  }

  return (
    <form onSubmit={handleNewTask}>
      <input
        type='text'
        placeholder='Add a New Task'
        onChange={(e) => setTaskContent(e.target.value)}
        className={styles.newTaskInput}
      />
      <Button text='Add Task'></Button>
    </form>
  );
}
