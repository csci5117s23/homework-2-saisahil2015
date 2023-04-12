import Todo from './todo';
import styles from '../styles/ToDoList.module.css';

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

  return <div className={styles.todoList}>{taskContent}</div>;
}
