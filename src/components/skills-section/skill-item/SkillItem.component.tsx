"use client";
import React, { useEffect, useRef, useState } from "react";
import ISkillItemProps from "./SkillItem.types";

export default function SkillItem({
  percentage,
  title,
  icon,
  size = 128,
  strokeWidth = 12,
}: ISkillItemProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  // Smooth animation using requestAnimationFrame
  function animateProgress() {
    const duration = 1200; // 1.2 seconds
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(t);

      setProgress(eased * percentage);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateProgress();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const offset = circumference - (circumference * progress) / 100;

  return (
    <div className="w-full flex flex-col items-center gap-4" ref={ref}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size}>
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#D9D9D933"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2231FF"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {/* ICON IN THE CENTER */}
        <div className="absolute inset-0 flex items-center justify-center">
          {React.cloneElement(icon, {
            className: "w-12 h-12 text-[#959595]",
          })}
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-0 font-bold">
        <span className="text-3xl text-[#2231FF]">{Math.round(progress)}%</span>
        <h4 className="text-2xl text-[#959595] capitalize">{title}</h4>
      </div>
    </div>
  );
}
