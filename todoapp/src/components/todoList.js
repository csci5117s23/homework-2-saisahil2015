import Todo from './todo';
import styles from '../styles/ToDoList.module.css';
import Button from './button';
import Link from 'next/link';

export default function TodoList({ tasks, done }) {
  const taskContent = done
    ? tasks
        .filter((task) => task.done)
        .map((task) => {
          return <Todo info={task.info}></Todo>;
        })
    : tasks
        .filter((task) => !task.done)
        .map((task) => {
          return <Todo info={task.info}></Todo>;
        });

  return done ? (
    <div className={styles.todoList}>
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
