import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getAllCategories, getTaskById, putTask } from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import Button from '@/components/button';
import Link from 'next/link';
import styles from '@/styles/TodoList.module.css';
import Category from '@/components/category';

export default function TodoItem() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [todoItemInfo, setTodoItemInfo] = useState(null);
  const { isLoaded, userId, getToken } = useAuth();
  const [otherCategories, setOtherCategories] = useState([]);
  const [selectedCategory, changeSelectedCategory] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');

  async function getTasks() {
    if (userId) {
      console.log('Id: ', id);
      const token = await getToken({ template: 'codehooks' });
      const result = await getTaskById(token, id);
      console.log('Result: ', result);
      const category = result.category;
      console.log('Category Value: ', category);
      setCurrentCategory(category);
      var categories = await getAllCategories(token);
      categories = categories.filter((c) => c.tag !== category);
      console.log('Categories: ', categories);
      setOtherCategories(categories);
      setTodoItemInfo(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
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

  async function changeCategory() {
    console.log('Selected category check: ', selectedCategory);
    const updatedTask = {
      _id: todoItemInfo._id,
      info: todoItemInfo.info,
      checked: false,
      userId: todoItemInfo.userId,
      category: selectedCategory.tag,
      createdOn: todoItemInfo.createdOn,
    };
    console.log("Here's the updated task: ", updatedTask);
    const token = await getToken({ template: 'codehooks' });
    await putTask(token, updatedTask);
    getTasks();
    console.log('Current Changed Category: ', currentCategory);
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
      <div className='subtitle' style={{ marginTop: '2rem' }}>
        <strong>
          Select from Tags below to Change the Category of the Task
        </strong>
      </div>
      <p>
        Note: The task belongs to the following category:
        <strong>{currentCategory}</strong>
      </p>
      <div style={{ marginTop: '2rem' }}>
        {otherCategories.map((c) => {
          console.log('Categories Value: ', c);
          console.log('Selected category: ', selectedCategory);
          console.log('Todo check: ', todoItemInfo);
          console.log('Current  Category: ', currentCategory);

          return (
            <Category key={c._id} tag={c} onChange={changeSelectedCategory} />
          );
        })}
      </div>
      <Button text='Change Category' onChange={changeCategory}></Button>
      <br />
      <br />
      <Button text='Todos' onChange={() => router.push('/todos')}></Button>
    </div>
  );
}
