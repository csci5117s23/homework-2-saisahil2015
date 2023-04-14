import Todo from './todo';
import styles from '../styles/ToDoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllTasks, postTask } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';

export default function TodoList({ done }) {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoaded, userId, getToken } = useAuth();

  useEffect(() => {
    async function getTasks() {
      if (userId) {
        const token = await getToken({ template: 'codehooks' });
        const data = await getAllTasks(token);
        setTaskList(data);
        setLoading(false);
      }
    }
    getTasks();
  }, [isLoaded]);

  async function addTask(newTask) {
    const token = await getToken({ template: 'codehooks' });
    await postTask(token, newTask);
    const data = await getAllTasks(token);
    setTaskList(data);
    setLoading(false);
  }

  const taskContent = done
    ? taskList
        .filter((task) => task.done)
        .map((task) => {
          return <Todo key={task._id} todo={task}></Todo>;
        })
    : taskList
        .filter((task) => !task.done)
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
