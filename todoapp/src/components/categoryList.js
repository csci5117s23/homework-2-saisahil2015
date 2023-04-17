import Todo from './todo';
import styles from '../styles/TodoList.module.css';
import Button from './button';
import TodoBuilder from './todoBuilder';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  getAllCategories,
  postCategory,
  deleteCategoryById,
} from '@/modules/data';
import { useAuth } from '@clerk/nextjs';
import CategoryBuilder from './categoryBuilder';
import Category from './category';

export default function CategoryList({ manageCategory }) {
  const { isLoaded, userId, getToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  async function getCategories() {
    if (userId) {
      const token = await getToken({ template: 'codehooks' });
      const data = await getAllCategories(token);
      console.log('Data: ', data);
      console.log('Categories data check: ', data);
      setCategories(data);
      setLoading(false);
    }
  }

  async function addCategory(newCategory) {
    const token = await getToken({ template: 'codehooks' });
    await postCategory(token, newCategory);
    const data = await getAllCategories(token);
    console.log('Categories data add check: ', data);
    setCategories(data);
    setLoading(false);
  }

  async function deleteCategory() {
    const token = await getToken({ template: 'codehooks' });
    console.log('Selected Category: ', selectedCategory);
    await deleteCategoryById(token, selectedCategory._id);
    const data = await getAllCategories(token);
    console.log('Categories data add check: ', data);
    setCategories(data);
    setLoading(false);
  }

  useEffect(() => {
    getCategories();
  }, [isLoaded]);

  function handleCategory(tag) {
    manageCategory(tag);
    setSelectedCategory(tag);
  }

  if (loading) {
    return <span>Loading ...</span>;
  } else {
    return (
      <div>
        <CategoryBuilder
          addCategory={addCategory}
          deleteCategory={deleteCategory}
        />
        <h1 className='subtitle' style={{ width: '55%', marginTop: '2rem' }}>
          <strong>
            Select from a category below to either tag it with the task or to
            delete the category itself:
          </strong>
        </h1>
        <div className='columns' style={{ marginBottom: '2rem' }}>
          {categories.map((category) => {
            console.log('Categories: ', category._id);
            return (
              <Category
                key={category._id}
                tag={category}
                onChange={handleCategory}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
