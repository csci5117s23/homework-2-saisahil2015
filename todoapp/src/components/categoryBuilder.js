import styles from '../styles/TodoList.module.css';
import Button from './button';
import { useState } from 'react';
import { useAuth } from '@clerk/nextjs';

export default function CategoryBuilder({ addCategory, deleteCategory }) {
  const [categoryName, setCategoryName] = useState('');

  async function handleNewCategory() {
    if (categoryName.trim().length === 0) return;
    await addCategory({ tag: categoryName.trim() });
    setCategoryName('');
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Add a New Category'
        onChange={(e) => setCategoryName(e.target.value)}
        className={styles.newTaskInput}
      />
      <Button text='Add Category' onChange={handleNewCategory}></Button>
      <Button text='Delete Category' onChange={deleteCategory}></Button>
    </div>
  );
}
