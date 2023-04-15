import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  getTaskById,
  putTask,
  getCategoryById,
  getIncompleteTasksForCategory,
  getCompleteTasksForCategory,
} from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';
import Link from 'next/link';
import Todo from '@/components/todo';
import styles from '@/styles/TodoList.module.css';

export default function IncompleteTasksWithCategoris() {
  const router = useRouter();
  console.log('Router info: ', router);
  const { category } = router.query;
  const [loading, setLoading] = useState(true);
  const [categoryTag, setCategoryTag] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const { isLoaded, userId, getToken } = useAuth();

  useEffect(() => {
    async function getTask() {
      if (userId) {
        console.log('categoryId: ', category);
        const token = await getToken({ template: 'codehooks' });
        const categoryName = await getCategoryById(token, category);
        const completeTasksForCategory = await getCompleteTasksForCategory(
          token,
          categoryName.tag
        );
        setCategoryTag(categoryName.tag);
        console.log('completeTasksForCategory: ', completeTasksForCategory);
        setTaskList(completeTasksForCategory);
        setLoading(false);
      }
    }
    getTask();
  }, [isLoaded]);

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className={styles.todoList}>
      {categoryTag}
      {taskList.map((task) => {
        return <Todo key={task._id} todo={task}></Todo>;
      })}
    </div>
  );
}