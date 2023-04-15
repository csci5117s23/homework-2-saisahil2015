import styles from '../styles/TodoList.module.css';

export default function Button({ text, onChange }) {
  if (onChange) {
    return (
      <button className={styles.button} onClick={() => onChange()}>
        {text}{' '}
      </button>
    );
  } else {
  }
  return <button className={styles.button}>{text} </button>;
}
