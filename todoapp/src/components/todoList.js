import Todo from './todo';

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

  return <div>{taskContent}</div>;
}
