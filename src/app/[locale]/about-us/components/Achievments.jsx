"use client";

import { getDictionary } from "@/utils/getDictionary";
import React, { useEffect, useRef, useState } from "react";

function Counter({ target, start, suffix = "" }) {
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

export default function Achievments({ data, locale }) {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);
  const dict = getDictionary(locale);

  const stats = Array.isArray(data) ? data : data?.data || [];

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
            {dict?.achievementsTitle}
          </span>

          <h2 className="mb-4 text-custom24 font-bold text-secondary md:text-custom32">
            {dict?.achievementsHeading}
          </h2>

          <p className="mx-auto max-w-2xl text-custom15 font-medium leading-8 text-blackGrey">
            {dict?.achievementsDescription}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const numberText = String(item.number || "0");
            const target = Number(numberText.replace(/\D/g, "")) || 0;
            const suffix = numberText.includes("+") ? "+" : "";

            return (
              <div
                key={index}
                className="rounded-[22px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <Counter
                  target={target}
                  start={startCounter}
                  suffix={suffix}
                />

                <p className="text-custom14 font-bold leading-7 text-secondary md:text-custom16">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}