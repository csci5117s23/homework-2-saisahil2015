import Todo from './todo';
import styles from '../styles/ToDoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TodoList({ done }) {
  const API_ENDPOINT = 'https://backend-sumc.api.codehooks.io/dev/toDo';
  const API_KEY = ' a80b0c50-8253-4977-b9ef-71122f66ff97';
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: { 'x-apikey': API_KEY },
    });
    const data = await response.json();
    setTaskList(data);
    setLoading(false);
  }

  async function addTask(newTask) {
    console.log(newTask);
    console.log(JSON.stringify(newTask));
    await fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: { 'x-apikey': API_KEY, 'Content-Type': 'application/json' },
    });
    getTasks();
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
