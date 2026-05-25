"use client";

import React, { useEffect, useRef, useState } from "react";

function Counter({ target, start, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <h3 className="mb-2 text-[42px] font-bold leading-none text-primary md:text-[48px]">
      {count}
      {suffix}
    </h3>
  );
}

export default function AchievementsCounter() {
  const [startCounter, setStartCounter] = useState(false);

  const sectionRef = useRef(null);

  const stats = [
    { number: 250, title: "مشروع منجز" },
    { number: 25, title: "عامًا من الخبرة" },
    { number: 15, title: "مدينة سعودية" },
    { number: 120, title: "متخصص وفني" },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="rounded-[20px] border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
        >
          <Counter target={item.number} start={startCounter} />

          <p className="text-custom15 font-bold text-secondary">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}