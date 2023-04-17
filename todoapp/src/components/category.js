import { useState } from 'react';
import styles from '../styles/TodoList.module.css';
import { putTask } from '@/modules/data';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Category({ tag, onChange }) {
  return (
    <div className='column' style={{ display: 'flex', flexDirection: 'row' }}>
      <Link href={`/todos/${tag._id}`} key={tag._id}>
        <p>{tag.tag}</p>
      </Link>
      <input
        type='radio'
        name='categories'
        onClick={() => onChange(tag)}
        style={{ marginLeft: '10px' }}
      />
    </div>
  );
}
