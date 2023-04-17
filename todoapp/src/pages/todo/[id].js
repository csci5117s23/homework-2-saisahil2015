import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTaskById, putTask } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';
import Link from 'next/link';
import styles from '@/styles/TodoList.module.css';

export default function TodoItem() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [todoItemInfo, setTodoItemInfo] = useState(null);
  const { isLoaded, userId, getToken } = useAuth();

  useEffect(() => {
    async function getTask() {
      if (userId) {
        console.log('Id: ', id);
        const token = await getToken({ template: 'codehooks' });
        const result = await getTaskById(token, id);
        console.log('Result: ', result);
        setTodoItemInfo(result);
        setLoading(false);
      }
    }
    getTask();
  }, [isLoaded]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTodoItemInfo({ ...todoItemInfo, [name]: value });
    console.log('Check: ', todoItemInfo);
  }
  async function editTask() {
    const token = await getToken({ template: 'codehooks' });
    console.log('TodoItem: ', todoItemInfo);
    await putTask(token, todoItemInfo);
  }

  async function handleCheck() {
    const todo = { ...todoItemInfo };
    const updatedTask = {
      _id: todo._id,
      info: todo.info,
      checked: true,
      userId: todo.userId,
      category: todo.category,
      createdOn: todo.createdOn,
    };
    console.log("Here's the new task: ", updatedTask);
    const token = await getToken({ template: 'codehooks' });
    await putTask(token, updatedTask);
    router.push('/done');
  }

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div className={styles.todoList}>
      <h1 className='subtitle'>
        <strong>
          Instructions: Edit the task here or complete it by checking the box
        </strong>
      </h1>
      <input
        name='info'
        value={todoItemInfo.info}
        onChange={handleInputChange}
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button text='Save' onChange={editTask}></Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='checkbox' onClick={handleCheck} />
      <br />
      <Button text='Todos' onChange={() => router.push('/todos')}></Button>
    </div>
  );
}
