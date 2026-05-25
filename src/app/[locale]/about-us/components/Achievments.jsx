"use client";

import React, { useEffect, useRef, useState } from "react";
import AchievementsCounter from "./AchievementsCounter ";

function Counter({ target, start, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      current += step;

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

export default function Achievments() {
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
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-5 py-2 text-custom13 font-bold text-primary">
            إنجازاتنا
          </span>

          <h2 className="mb-4 text-custom24 font-bold text-secondary md:text-custom32">
            إنجازاتنا في أرقام
          </h2>

          <p className="mx-auto max-w-2xl text-custom15 font-medium leading-8 text-blackGrey">
            رقم صناعة اللاندسكيب نعمل بخطوات ثابتة لبناء حلول خارجية احترافية
            وتجارب تنفيذ موثوقة لعملائنا.
          </p>
        </div>

        <AchievementsCounter />
      </div>
    </section>
  );
}
