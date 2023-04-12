import styles from '../styles/ToDoList.module.css';

export default function Todo({ info }) {
  return <div className={styles.todo}>{info}</div>;
}
