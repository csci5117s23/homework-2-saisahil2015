import Todo from './todo';
import styles from '../styles/TodoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  getAllUncheckedTasks,
  getAllCheckedTasks,
  postTask,
} from '@/modules/data';
import { useAuth } from '@clerk/nextjs';

export default function TodoList({ done }) {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoaded, userId, getToken } = useAuth();
  let data = [];

  useEffect(() => {
    async function getTasks() {
      if (userId) {
        const token = await getToken({ template: 'codehooks' });
        if (done) {
          data = await getAllCheckedTasks(token);
        } else {
          data = await getAllUncheckedTasks(token);
        }
        console.log('Data: ', data);
        setTaskList(data);
        setLoading(false);
      }
    }
    getTasks();
  }, [isLoaded]);

  async function addTask(newTask) {
    const token = await getToken({ template: 'codehooks' });
    await postTask(token, newTask);
    const data = await getAllUncheckedTasks(token);
    setTaskList(data);
    setLoading(false);
  }

  console.log('Done test: ', done);
  const taskContent = done
    ? taskList
        .filter((task) => task.checked)
        .map((task) => {
          return <Todo key={task._id} todo={task}></Todo>;
        })
    : taskList
        .filter((task) => !task.checked)
        .map((task) => {
          return <Todo key={task._id} todo={task}></Todo>;
        });

  if (loading) {
    return <span>Loading...</span>;
  } else {
    return done ? (
      <div className={styles.todoList}>
        {taskContent}
        <Link href='/todos'>
          <Button text='Incomplete Tasks'></Button>
        </Link>
      </div>
    ) : (
      <div className={styles.todoList}>
        <TodoBuilder addTask={addTask} />
        {taskContent}
        <Link href='/done'>
          <Button text='Completed Tasks'></Button>
        </Link>
      </div>
    );
  }
}
