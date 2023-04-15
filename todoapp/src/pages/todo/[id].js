import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTaskById, putTask } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';
import Link from 'next/link';

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
    <div>
      <input
        name='info'
        value={todoItemInfo.info}
        onChange={handleInputChange}
      />
      <Button text='Save' onChange={editTask}></Button>
      <input type='checkbox' onClick={handleCheck} />
      <Link href='/todos'>Check out the remaining tasks</Link>
    </div>
  );
}
