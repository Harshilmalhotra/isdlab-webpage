'use client';

import { useEffect, useRef, useState } from 'react';

const generateItems = (count: number, offset: number = 0) =>
  Array.from({ length: count }, (_, i) => `Item ${i + offset + 1}`);

export default function HorizontalScroll() {
  const [items, setItems] = useState(() => generateItems(10));
  const [offset, setOffset] = useState(10);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMoreItems = () => {
    const newItems = generateItems(10, offset);
    setItems((prev) => [...prev, ...newItems]);
    setOffset((prev) => prev + 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [items]);

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap p-4">
      <div className="inline-flex gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[200px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-2xl shadow-lg"
          >
            {item}
          </div>
        ))}
        {/* Observer target */}
        <div ref={observerRef} className="min-w-[5px]" />
      </div>
    </div>
  );
}
