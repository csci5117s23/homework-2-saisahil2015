import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import TodoList from '@/components/todoList';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const TASKS = [
  { info: 'Clean room', done: true },
  { info: 'Pay bills', done: true },
  { info: 'Code the homework', done: false },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahil'S TodoList</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TodoList tasks={TASKS} done={false}></TodoList>
      <Link href='/done'>Done</Link>
    </>
  );
}
