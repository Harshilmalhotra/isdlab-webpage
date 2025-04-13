"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";

const IMGS: { url: string; text: string }[] = [
  {
    url: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sample Text 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sample Text 2",
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sample Text 3",
  },
  {
    url: "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sample Text 4",
  },
];

const RollingGallery: React.FC = () => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize(); // Initialize screen size check on mount

    window.addEventListener("resize", handleResize); // Add event listener for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
  }, []); // Empty dependency array, run only once on mount and unmount

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = IMGS.length;
  const faceWidth: number = cylinderWidth / faceCount;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const dragFactor: number = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 30, // Reduced speed
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startInfiniteSpin(rotation.get());
  }, [rotation]); // Add `rotation` as a dependency to ensure infinite spin starts on rotation change

  const handleDrag = (_: any, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: any, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    startInfiniteSpin(finalAngle);
  };

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-black">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {IMGS.map((item, i) => (
            <div
              key={i}
              className="group absolute flex flex-col items-center justify-center p-4 [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <img
                src={item.url}
                alt={`gallery-${i}`}
                className="pointer-events-none h-[200px] w-[300px] rounded-[15px] border-[3px] border-white object-cover filter grayscale transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <p className="text-white mt-4 text-center">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;