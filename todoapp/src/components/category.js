import { useState } from 'react';
import styles from '../styles/TodoList.module.css';
import { putTask } from '@/modules/data';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function Category({ tag, onChange }) {
  return (
    <div>
      <p>{tag.tag}</p>
      <input type='radio' name='categories' onClick={() => onChange(tag)} />
    </div>
  );
}
