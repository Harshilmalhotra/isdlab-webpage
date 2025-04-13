'use client';

import { useRef, useEffect, useState } from 'react';

const cards = [
  { src: '/cards/card (1).jpg', title: 'Roboroarz 24' },
  { src: '/cards/card (2).jpg', title: 'Roboroarz 25' },
  { src: '/cards/card (3).jpg', title: 'Roboroarz 24' },
  { src: '/cards/card (4).jpg', title: 'Roboroarz 23' },
  { src: '/cards/card (5).jpg', title: 'Roboroarz 23' },
];


export default function AutoScrollCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [paused, setPaused] = useState(false);
  const [pauseTime, setPauseTime] = useState<number | null>(null);

  useEffect(() => {
    if (pauseTime !== null) {
      const timer = setTimeout(() => {
        setPaused(false);
        setPauseTime(null); // Reset pause time after the 3-second delay
      }, 3000); // 3 seconds delay to restart the scroll
      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [pauseTime]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseLeave = () => (isDragging.current = false);
    const handleMouseUp = () => (isDragging.current = false);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMobileTap = () => {
    if (!paused) {
      setPaused(true);
      setPauseTime(Date.now()); // Capture the current time when paused
    }
  };

  const doubledCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-black">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        ref={containerRef}
        onClick={handleMobileTap}
        className="group flex gap-6 whitespace-nowrap px-4 overflow-hidden select-none touch-manipulation"
      >
        <div
          className={`flex gap-6 ${
            paused ? '' : 'animate-scroll'
          } group-hover:[animation-play-state:paused]`}
        >
          {doubledCards.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center w-64 shrink-0 bg-black hover:bg-black/70 backdrop-blur-lg rounded-2xl p-4 shadow-md transition duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl mb-2"
              />
              <h3 className="text-center text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}