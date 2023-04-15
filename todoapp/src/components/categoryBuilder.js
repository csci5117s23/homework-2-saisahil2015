import styles from '../styles/TodoList.module.css';
import Button from './button';
import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';

export default function CategoryBuilder({ addCategory }) {
  const [categoryName, setCategoryName] = useState('');
  const { userId } = useAuth();

  async function handleNewCategory(e) {
    e.preventDefault();
    if (categoryName.trim().length === 0) return;
    await addCategory({ tag: categoryName.trim() });
    setCategoryName('');
  }

  return (
    <form onSubmit={handleNewCategory}>
      <input
        type='text'
        placeholder='Add a New Category'
        onChange={(e) => setCategoryName(e.target.value)}
        className={styles.newTaskInput}
      />
      <Button text='Add Category'></Button>
    </form>
  );
}
