import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { ClerkProvider, SignedIn, SignIn, SignedOut } from '@clerk/nextjs';

const publicPages = ['/'];

export default function App({ Component, pageProps }) {
  const { pathName } = useRouter();

  const isPublicPage = publicPages.includes(pathName);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>
          <SignedOut>
            <SignIn></SignIn>
            <Component {...pageProps} />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}
