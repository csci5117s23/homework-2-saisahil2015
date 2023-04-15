import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  getTaskById,
  putTask,
  getCategoryById,
  getIncompleteTasksForCategory,
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
  const [categoryName, setCategory] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const { isLoaded, userId, getToken } = useAuth();

  useEffect(() => {
    async function getTask() {
      if (userId) {
        console.log('categoryId: ', category);
        const token = await getToken({ template: 'codehooks' });
        const categoryInfo = await getCategoryById(token, category);
        setCategory(categoryInfo.tag);
        const incompleteTasksForCategory = await getIncompleteTasksForCategory(
          token,
          categoryName
        );
        console.log('Category Name: ', categoryName);
        console.log('incompleteTasksForCategory: ', incompleteTasksForCategory);
        setTaskList(incompleteTasksForCategory);
        setLoading(false);
      }
    }
    getTask();
  }, [isLoaded]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTodoItemInfo({ ...todoItemInfo, [name]: value });
    console.log('Check: ', todoItemInfo);
  }
  async function editTask() {
    const token = await getToken({ template: 'codehooks' });
    console.log('TodoItem: ', todoItemInfo);
    await putTask(token, todoItemInfo);
  }

  async function handleCheck() {
    const todo = { ...todoItemInfo };
    const updatedTask = {
      _id: todo._id,
      info: todo.info,
      checked: true,
      userId: todo.userId,
      createdOn: todo.createdOn,
    };
    console.log("Here's the new task: ", updatedTask);
    const token = await getToken({ template: 'codehooks' });
    await putTask(token, updatedTask);
    router.push('/done');
  }

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div>
      {categoryName}
      {taskList.map((task) => {
        return <Todo key={task._id} todo={task}></Todo>;
      })}
    </div>
  );
}
