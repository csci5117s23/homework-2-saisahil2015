import Todo from './todo';
import styles from '../styles/ToDoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TodoList({ tasks, done }) {
  const [taskList, setTaskList] = useState(tasks);

  function addTask(newTask) {
    setTaskList(taskList.concat(newTask));
  }

  const taskContent = done
    ? taskList
        .filter((task) => task.done)
        .map((task) => {
          return <Todo key={task.info} info={task.info}></Todo>;
        })
    : taskList
        .filter((task) => !task.done)
        .map((task) => {
          return <Todo key={task.info} info={task.info}></Todo>;
        });

  return done ? (
    <div className={styles.todoList}>
      <TodoBuilder addTask={addTask} />
      {taskContent}
      <Link href='/todos'>
        <Button text='Incomplete Tasks'></Button>
      </Link>
    </div>
  ) : (
    <div className={styles.todoList}>
      {taskContent}
      <Link href='/done'>
        <Button text='Completed Tasks'></Button>
      </Link>
    </div>
  );
}
