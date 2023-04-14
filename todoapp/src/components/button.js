import styles from '../styles/TodoList.module.css';

export default function Button({ text }) {
  return <button className={styles.button}>{text} </button>;
}
