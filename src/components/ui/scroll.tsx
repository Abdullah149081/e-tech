"use client";

import React, { useEffect, useRef, useCallback } from "react";

type AutoScrollProps = {
  /** px per second */
  speed?: number; // default 120 px/s
  /** pause auto-scroll while user hovers the page */
  pauseOnHover?: boolean;
  /** target scroll container. If not provided, window is used */
  containerRef?: React.RefObject<HTMLElement> | null;
  /** start automatically when mounted */
  autoStart?: boolean;
  /** whether to disable when user touches / interacts (wheel, touch) */
  pauseOnUserInteraction?: boolean;
};

/**
 * AutoScroll

 <AutoScroll speed={50} pauseOnHover pauseOnUserInteraction autoStart />
 */
export default function AutoScroll({
  speed = 120,
  pauseOnHover = true,
  containerRef = null,
  autoStart = true,
  pauseOnUserInteraction = true,
}: AutoScrollProps) {
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef<1 | -1>(1); // 1 = down, -1 = up
  const pausedRef = useRef<boolean>(!autoStart);
  const userInteractingRef = useRef<boolean>(false);
  const speedRef = useRef<number>(speed);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update speedRef when speed prop changes
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const getScrollInfo = useCallback(() => {
    if (containerRef && containerRef.current) {
      const el = containerRef.current;
      return {
        pos: el.scrollTop,
        max: Math.max(0, el.scrollHeight - el.clientHeight),
        scrollTo: (y: number) => (el.scrollTop = y),
        scrollBy: (dy: number) => (el.scrollTop = el.scrollTop + dy),
      };
    }

    const doc = document.documentElement;
    const { body } = document;
    const max =
      Math.max(doc.scrollHeight, body.scrollHeight, doc.clientHeight) -
      window.innerHeight;

    return {
      pos: window.scrollY || window.pageYOffset,
      max: Math.max(0, max),
      scrollTo: (y: number) => window.scrollTo({ top: y }),
      scrollBy: (dy: number) => window.scrollBy({ top: dy }),
    };
  }, [containerRef]);

  const step = useCallback(
    (time: number) => {
      if (pausedRef.current) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      if (pauseOnUserInteraction && userInteractingRef.current) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const last = lastTimeRef.current ?? time;
      const dt = Math.min(100, time - last); // cap dt to avoid huge jumps
      lastTimeRef.current = time;

      const { pos, max, scrollTo } = getScrollInfo();

      // px to move this frame
      const move = ((speedRef.current * dt) / 1000) * directionRef.current;

      let next = pos + move;

      // if we reached the end, clamp and reverse
      if (next >= max) {
        next = max;
        directionRef.current = -1;
      } else if (next <= 0) {
        next = 0;
        directionRef.current = 1;
      }

      // apply movement. use scrollTo for accurate clamping on some browsers.
      scrollTo(next);

      rafRef.current = requestAnimationFrame(step);
    },
    [getScrollInfo, pauseOnUserInteraction],
  );

  useEffect(() => {
    // start loop
    if (!autoStart) return;
    pausedRef.current = false;
    lastTimeRef.current = null;
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [autoStart, step]);

  useEffect(() => {
    // Pause on hover
    if (!pauseOnHover) return;

    const target =
      containerRef && containerRef.current ? containerRef.current : window;

    const onEnter = () => {
      pausedRef.current = true;
    };
    const onLeave = () => {
      pausedRef.current = false;
    };

    if (target instanceof Window) {
      window.addEventListener("mousemove", onEnter);
      window.addEventListener("mouseout", onLeave);
    } else {
      target.addEventListener("mouseenter", onEnter);
      target.addEventListener("mouseleave", onLeave);
    }

    return () => {
      if (target instanceof Window) {
        window.removeEventListener("mousemove", onEnter);
        window.removeEventListener("mouseout", onLeave);
      } else {
        target.removeEventListener("mouseenter", onEnter);
        target.removeEventListener("mouseleave", onLeave);
      }
    };
  }, [pauseOnHover, containerRef]);

  useEffect(() => {
    if (!pauseOnUserInteraction) return;

    const onUserInteracting = () => {
      userInteractingRef.current = true;
      // resume after a short delay of no interaction
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        userInteractingRef.current = false;
      }, 1200);
    };

    // listen for wheel, touch, key presses that usually indicate user scrolling
    window.addEventListener("wheel", onUserInteracting, { passive: true });
    window.addEventListener("touchstart", onUserInteracting, { passive: true });
    window.addEventListener("keydown", onUserInteracting);

    return () => {
      window.removeEventListener("wheel", onUserInteracting);
      window.removeEventListener("touchstart", onUserInteracting);
      window.removeEventListener("keydown", onUserInteracting);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pauseOnUserInteraction]);

  // Expose simple controls for dev debugging via window (optional)
  useEffect(() => {
    interface AutoScrollControls {
      pause: () => void;
      play: () => void;
      reverse: () => void;
      setSpeed: (s: number) => void;
    }

    (
      window as typeof window & { __autoScrollControls: AutoScrollControls }
    ).__autoScrollControls = {
      pause: () => (pausedRef.current = true),
      play: () => (pausedRef.current = false),
      reverse: () =>
        (directionRef.current = directionRef.current === 1 ? -1 : 1),
      setSpeed: (s: number) => (speedRef.current = s),
    };
  }, []);

  return null; // invisible controller — component only controls scrolling
}

/*
Example usage inside a Next.js client page (put this in a client component / page):

import AutoScroll from '@/components/AutoScroll';

export default function HomePage() {
  return (
    <main>
      <AutoScroll speed={140} pauseOnHover pauseOnUserInteraction autoStart />

      <section style={{ height: '150vh' }}>Top content — lots of height</section>
      <section style={{ height: '150vh' }}>Middle content — more height</section>
      <section style={{ height: '150vh' }}>Bottom content — more height</section>
    </main>
  );
}

Notes:
- This component runs on the client only ("use client").
- If you want to scroll a specific container element instead of the window, create a ref and pass it as containerRef.
- You can pause/resume with window.__autoScrollControls.pause() and .play() (dev only).
*/
