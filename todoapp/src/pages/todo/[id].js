import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTaskById, putTask } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';

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

  return loading ? (
    <span>Loading...</span>
  ) : (
    <div>
      <input
        name='info'
        value={todoItemInfo.info}
        onChange={handleInputChange}
      />
      <Button text='Edit' onChange={editTask}></Button>
    </div>
  );
}
