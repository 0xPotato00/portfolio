import './styles/globals.css';
import type { AppProps } from 'next/app';
import { loadCursor } from '@/utils/cursorAnimation';
import { useEffect, useRef, useState } from 'react';
import ILayout from '@/components/Dashboard/Dashboard';
import { WithContainer } from '@/components/Layout';

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
      <ILayout>
        <WithContainer>
          <Component {...pageProps} />
          <div
            ref={ballCanvasRef as any}
            className="ball-transitions pointer-events-none fixed z-30 h-6 w-6 rounded-full border"
          />
        </WithContainer>
      </ILayout>
    </>
  );
}
