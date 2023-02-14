import './styles/globals.css';
import type { AppProps } from 'next/app';
import { loadCursor } from '@/utils/cursorAnimation';
import { Router } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function App({ Component, pageProps, router }: AppProps) {
  const [mobileView, setMobileView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const ballCanvasRef = useRef<HTMLCanvasElement>(null);

  const toggeleMenu = () => {
    setMobileView(!mobileView);
  };

  useEffect(() => {
    if (mobileView) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'unset';
  }, [mobileView]);

  useEffect(() => {
    if (typeof window === 'undefined' || !ballCanvasRef.current) return;
    return loadCursor(ballCanvasRef.current);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMobileView(false);
    void new Audio('/sounds/enter.mp3').play().catch(() => null);
  }, [Router]);

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
  }, [router]);

  const closeMenu = () => {
    setMobileView(false);
  };

  return (
    <>
      <Component {...pageProps} />
      <div
        ref={ballCanvasRef}
        className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border border-black bg-transparent opacity-0 shadow-md duration-200 dark:border-white"
      />
    </>
  );
}
