import styles from '../styles/TodoList.module.css';

export default function Button({ text, onChange, addClass }) {
  if (onChange) {
    if (addClass) {
      return (
        <button
          className={styles.button}
          style={{ marginTop: '2rem' }}
          onClick={() => onChange()}
        ></button>
      );
    }
    return (
      <button className={styles.button} onClick={() => onChange()}>
        {text}
      </button>
    );
  }
  return <button className={styles.button}>{text} </button>;
}
