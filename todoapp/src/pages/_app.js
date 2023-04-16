import '@/styles/globals.css';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';
import {
  ClerkProvider,
  SignedIn,
  SignIn,
  SignedOut,
  SignInButton,
} from '@clerk/nextjs';

const publicPages = ['/'];

export default function App({ Component, pageProps }) {
  const { pathName } = useRouter();

  const isPublicPage = publicPages.includes(pathName);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <div className={styles.container}>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <Component {...pageProps} />
          </SignedOut>
        </div>
      )}
    </ClerkProvider>
  );
}
