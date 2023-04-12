import styles from '../styles/ToDoList.module.css';

export default function Button({ text }) {
  return <button className={styles.button}>{text} </button>;
}
