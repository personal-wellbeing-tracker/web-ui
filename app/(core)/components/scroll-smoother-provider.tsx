'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

type ScrollSmootherInstance = {
  kill: () => void;
  scrollTo: (target: string | Element | number, smooth?: boolean, position?: string) => void;
};

type ScrollSmootherProviderProps = {
  children: React.ReactNode;
};

const ScrollSmootherProvider = ({ children }: ScrollSmootherProviderProps) => {
  const smootherRef = useRef<ScrollSmootherInstance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let active = true;

    const setupSmoother = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const { ScrollSmoother } = await import('gsap/ScrollSmoother');

      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      if (!active) {
        return;
      }

      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        normalizeScroll: true,
      }) as ScrollSmootherInstance;

      smootherRef.current = smoother;

      const handleAnchorClick = (e: MouseEvent) => {
        const link = (e.target as Element).closest('a');
        if (link && link.hash) {
          const targetEl = document.querySelector(link.hash);
          if (targetEl) {
            const currentPath = window.location.pathname;
            const linkPath = link.pathname;

            if (currentPath === linkPath || (currentPath === '/' && linkPath === '')) {
              e.preventDefault();
              e.stopPropagation();
              
              // smoothly scroll with gsap ScrollSmoother to the target element.
              smootherRef.current?.scrollTo(targetEl, true, "top 120px");
              
              // Only update URL if not already matching the literal hash to prevent #about#about
              if (window.location.hash !== link.hash) {
                window.history.pushState(null, '', link.href);
              }
            }
          }
        }
      };

      document.addEventListener('click', handleAnchorClick, { capture: true });

      // Auto-scroll on initial load if hash is present
      if (window.location.hash) {
        setTimeout(() => {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) {
            smootherRef.current?.scrollTo(targetEl, true, "top 120px");
          }
        }, 500);
      }

      // Store cleanup for listener
      (smootherRef.current as any)._cleanup = () => {
        document.removeEventListener('click', handleAnchorClick, { capture: true });
      };
    };

    void setupSmoother();

    return () => {
      active = false;
      if (smootherRef.current) {
        if (typeof (smootherRef.current as any)._cleanup === 'function') {
          (smootherRef.current as any)._cleanup();
        }
        smootherRef.current.kill();
      }
      smootherRef.current = null;
    };
  }, []);

  // Handle Next.js route navigation
  useEffect(() => {
    if (smootherRef.current) {
      // Small timeout to allow DOM to render new page content
      setTimeout(() => {
        if (window.location.hash) {
          const targetEl = document.querySelector(window.location.hash);
          if (targetEl) {
            smootherRef.current?.scrollTo(targetEl, true, "top 120px");
          }
        } else {
          smootherRef.current?.scrollTo(0, false);
        }
      }, 150);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper" className="min-h-screen">
      <div id="smooth-content" className="min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherProvider;
