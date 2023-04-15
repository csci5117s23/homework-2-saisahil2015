import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function errorPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href='/todos'>Check out the Incomplete Tasks</Link>
    </div>
  );
}
