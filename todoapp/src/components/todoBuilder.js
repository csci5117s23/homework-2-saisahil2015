import styles from '../styles/TodoList.module.css';
import Button from './button';
import { useState } from 'react';
import CategoryList from './categoryList';

export default function TodoBuilder({ addTask }) {
  const [taskContent, setTaskContent] = useState('');
  const [category, setCategory] = useState('');

  async function handleNewTask(e) {
    e.preventDefault();
    if (taskContent.trim().length === 0) return;
    await addTask({
      info: taskContent.trim(),
      checked: false,
      category: category.tag,
    });
    setTaskContent('');
  }

  function handleTaskAndCategory(category) {
    setCategory(category);
  }

  return (
    <div>
      <form onSubmit={handleNewTask}>
        <input
          type='text'
          placeholder='Add a New Task'
          onChange={(e) => setTaskContent(e.target.value)}
          className={styles.newTaskInput}
        />
        <Button text='Add Task'></Button>
      </form>
      <CategoryList manageCategory={handleTaskAndCategory} />
    </div>
  );
}
