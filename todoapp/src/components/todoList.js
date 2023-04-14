import Todo from './todo';
import styles from '../styles/ToDoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllTasks, postTask } from '@/modules/data';

export default function TodoList({ done }) {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTasks() {
      const data = await getAllTasks();
      setTaskList(data);
      setLoading(false);
    }
    getTasks();
  }, []);

  async function addTask(newTask) {
    await postTask(newTask);
    const data = await getAllTasks();
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
