import './styles/globals.css';
import type { AppProps } from 'next/app';
import { loadCursor } from '@/utils/cursorAnimation';
import { useEffect, useRef, useState } from 'react';
import DashboardLayout from '@/components/Dashboard/Dashboard';

export default function App({ Component, pageProps, router }: AppProps) {
  const [mobileView, setMobileView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const ballCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (mobileView) {
      document.body.style.overflow = 'hidden';
      return;
    }
    // document.body.style.overflow = 'unset';
  }, [mobileView]);

  useEffect(() => {
    if (typeof window === 'undefined' || !ballCanvasRef.current) return;
    return loadCursor(ballCanvasRef.current as any);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const listener = () => {
      setHasScrolled(window.scrollY > 20);
    };

    document.addEventListener('scroll', listener);

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);

  const closeMenu = () => {
    setMobileView(false);
  };

  return (
    <>
      <DashboardLayout>
        <Component {...pageProps} />
        <div
          ref={ballCanvasRef as any}
          className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border  bg-black opacity-40 shadow-lg duration-200 dark:border-white dark:bg-transparent dark:opacity-0 dark:shadow-none dark:border-black dark:bg-black dark:opacity-0 dark:duration-0"
        />
      </DashboardLayout>
    </>
  );
}
