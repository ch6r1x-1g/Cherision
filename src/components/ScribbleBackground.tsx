"use client";

import { useEffect, useState } from "react";

interface Scribble {
  id: number;
  top: number;
  left: number;
  rotate: number;
  scale: number;
}

export default function ScribbleBackground() {
  const [scribbles, setScribbles] = useState<Scribble[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const spawnScribble = () => {
      // Create new scribble
      const newScribble: Scribble = {
        id: Date.now(),
        top: Math.random() * 80 + 10, // 10% to 90%
        left: Math.random() * 80 + 10, // 10% to 90%
        rotate: Math.random() * 360, // Random rotation
        scale: Math.random() * 6 + 2, // 2x to 8x
      };

      setScribbles([newScribble]);

      // Schedule next spawn after animation completes (7s)
      timeoutId = setTimeout(() => {
        setScribbles([]); // Clear current
        // Small delay before next one to ensure clean visual break
        timeoutId = setTimeout(spawnScribble, 100);
      }, 7000);
    };

    spawnScribble();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {scribbles.map((s) => (
        <div
          key={s.id}
          className="absolute w-[800px] md:w-[1000px] h-auto flex items-center justify-center opacity-80"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            transform: `translate(-50%, -50%) rotate(${s.rotate}deg) scale(${s.scale})`,
          }}
        >
          <svg
            width="2009"
            height="772"
            viewBox="0 0 2009 772"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain"
          >
            <path
              d="M50.0071 574.159C55.1509 565.81 555.367 221.241 804.832 50.0009L382.008 645.537L1007.04 104.832L747.942 594.348L1247.73 137.58C1163.46 326.339 995.855 701.133 999.67 690.235C1003.49 679.338 1365.58 321.435 1546.14 143.846L1226.72 721.996L1674.59 257.384L1587.81 685.446L1958.48 248.631"
              stroke="url(#paint0_linear_19_2)"
              strokeWidth="100"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength="1"
              className="animate-draw-cycle"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: 1,
              }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_19_2"
                x1="68.5843"
                y1="317.452"
                x2="1943.68"
                y2="453.149"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FBBBE3" stopOpacity="0.75" />
                <stop offset="1" stopColor="#FBBBE3" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
