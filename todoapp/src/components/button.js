import styles from '../styles/TodoList.module.css';

export default function Button({ text, onChange, deleteClass, addClass }) {
  if (onChange) {
    if (deleteClass) {
      return (
        <button
          className='delete is-large'
          style={{ backgroundColor: 'red' }}
          onClick={() => onChange()}
        ></button>
      );
    } else if (addClass) {
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
