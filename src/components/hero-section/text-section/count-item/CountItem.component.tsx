"use client";
import { useEffect, useState } from "react";
import ICountItemProps from "./CountItem.types";

export default function CountItem({ count, title }: ICountItemProps) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const incrementTime = 50;
    const totalIncrements = Math.ceil(duration / incrementTime);
    const incrementValue = Math.ceil(count / totalIncrements);

    const interval = setInterval(() => {
      start += incrementValue;
      if (start >= count) {
        start = count;
        clearInterval(interval);
      }
      setCounter(start);
    }, incrementTime);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="w-full flex flex-col gap-1 text-xl font-bold md:px-4 max-md:py-4">
      <h2 className="text-[#2231FF]">{counter}+</h2>
      <p className="text-[#DFDFDF] capitalize">{title}</p>
    </div>
  );
}
