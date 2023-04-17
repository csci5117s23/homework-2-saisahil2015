import styles from '../styles/TodoList.module.css';
import Button from './button';
import { useState } from 'react';
import CategoryList from './categoryList';

export default function TodoBuilder({
  addTask,
  needToAddCategory,
  sentCategory,
}) {
  const [taskContent, setTaskContent] = useState('');
  const [category, setCategory] = useState('');

  async function handleNewTask(e) {
    e.preventDefault();
    if (taskContent.trim().length === 0) return;
    if (needToAddCategory) {
      await addTask({
        info: taskContent.trim(),
        checked: false,
        category: category.tag,
      });
    } else {
      console.log('Value: ', sentCategory);
      await addTask({
        info: taskContent.trim(),
        checked: false,
        category: sentCategory,
      });
    }

    setTaskContent('');
  }

  function handleTaskAndCategory(category) {
    setCategory(category);
  }

  return needToAddCategory ? (
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
      <CategoryList manageCategory={handleTaskAndCategory} addClass={true} />
    </div>
  ) : (
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
    </div>
  );
}
