import { useState, useEffect } from 'react';
import { putTask } from '@/modules/data';
import { useRouter } from 'next/router';
import { getTaskById } from '@/modules/data';

export default function TodoItem() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [todoItemInfo, setTodoItemInfo] = useState(null);

  useEffect(() => {
    async function getTask() {
      console.log('Id: ', id);
      const result = await getTaskById(id);
      console.log('Result: ', result);
      setTodoItemInfo(result);
      setLoading(false);
    }
    console.log('Id check: ', id);
    getTask();
  }, []);

  return loading ? <span>Loading...</span> : <div>{todoItemInfo.info}</div>;
}
