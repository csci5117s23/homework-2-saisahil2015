import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTaskById } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';

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

  return loading ? <span>Loading...</span> : <div>{todoItemInfo.info}</div>;
}
