import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  getTaskById,
  putTask,
  getCategoryById,
  getIncompleteTasksForCategory,
  postTask,
} from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';
import Link from 'next/link';
import Todo from '@/components/todo';
import styles from '@/styles/TodoList.module.css';
import TodoBuilder from '@/components/todoBuilder';

export default function IncompleteTasksWithCategoris() {
  const router = useRouter();
  // console.log('Router info: ', router);
  const { category } = router.query;
  const [loading, setLoading] = useState(true);
  const [categoryTag, setCategoryTag] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const { isLoaded, userId, getToken } = useAuth();

  async function fetchIncompleteTasksForCategory() {
    const token = await getToken({ template: 'codehooks' });
    // console.log('Category check: ', category);
    const categoryName = await getCategoryById(token, category);
    // setCategory(categoryInfo.tag);
    // console.log('Hello');
    const incompleteTasksForCategory = await getIncompleteTasksForCategory(
      token,
      categoryName.tag
    );
    setCategoryTag(categoryName.tag);
    // console.log('Category Name Checkinggg: ', categoryName);
    // console.log('incompleteTasksForCategory: ', incompleteTasksForCategory);
    setTaskList(incompleteTasksForCategory);
    setLoading(false);
  }

  useEffect(() => {
    fetchIncompleteTasksForCategory();
  }, [isLoaded]);

  async function addTask(newTask) {
    const token = await getToken({ template: 'codehooks' });
    // console.log('New Task: ', newTask);
    await postTask(token, newTask);
    fetchIncompleteTasksForCategory();
  }

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className={styles.todoList}>
      <div className='subtitle' style={{ marginLeft: '40%' }}>
        {' '}
        <strong>{categoryTag}</strong>
      </div>
      {/* {console.log('Tasklist: ', taskList)} */}
      {taskList.map((task) => {
        return (
          <Todo
            key={task._id}
            todo={task}
            onChange={fetchIncompleteTasksForCategory}
          ></Todo>
        );
      })}
      <TodoBuilder
        addTask={addTask}
        needToAddCategory={false}
        sentCategory={categoryTag}
      ></TodoBuilder>
    </div>
  );
}
