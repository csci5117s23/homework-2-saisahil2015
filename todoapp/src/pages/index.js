import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  SignedOut,
  SignUpButton,
  SignInButton,
  useAuth,
  SignedIn,
} from '@clerk/nextjs';
import { useRouter } from 'next/router';
import Button from '@/components/button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const { userId } = useAuth();

  function redirecToTodos() {
    if (!sessionStorage.getItem('hasVisited')) {
      router.push('/todos');
      sessionStorage.setItem('hasVisited', 'true');
    }
  }
  if (userId) {
    redirecToTodos();
  }
  return (
    <>
      <Head>
        <title>Sahil'S TodoList</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SignedOut>
        <section className={styles.main}>
          <div className={styles.container}>
            <h1 className='title'>Sahil's Todolist</h1>
            <p className='subtitle'>
              Welcome to my <strong>TodoList</strong> site!
              <br></br>
              The site offers a variety of features from having a personalized
              <br></br>
              profile to adding and completing tasks with relevant categories
            </p>
            <span className={styles.button}>
              <SignInButton className='button is-link'></SignInButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <SignUpButton className='button is-link'></SignUpButton>
            </span>
          </div>
        </section>
      </SignedOut>

      <SignedIn>
        <section className={styles.main}>
          <div className={styles.container}>
            <h1 className='title'>Sahil's Todolist</h1>
            <p className='subtitle'>
              Welcome to my <strong>TodoList</strong> site!
              <br></br>
              The site offers a variety of features from having a personalized
              <br></br>
              profile to adding and completing tasks with relevant categories
            </p>
            <span className={styles.button}>
              <Button text='Todos' onChange={() => router.push('/todos')} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button text='Done' onChange={() => router.push('/done')} />
            </span>
          </div>
        </section>
      </SignedIn>
    </>
  );
}
