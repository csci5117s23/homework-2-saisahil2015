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
      <div className='columns'>
        <div className='column is-one-quarter'>
          <Button text='Add Category' onChange={handleNewCategory}></Button>
        </div>
        <div className='column' style={{ marginTop: '0.5rem' }}>
          <Button
            text='Delete Category'
            onChange={deleteCategory}
            deleteClass={true}
          ></Button>
        </div>
      </div>
    </div>
  );
}
