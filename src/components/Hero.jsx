"use client";
import Image from "next/image";
import React from "react";
import AnimatedDiv from "./AnimateDiv";
import StatsBox from "./features/StatesBox";
import Link from "next/link";
import { useMainContent } from "@/hooks/main-content/useMainContent";
import LoadingCard from "./layouts/LoadingCard";
import FullScreenLoader from "./layouts/FulScreenLoading";
import { getDictionary } from "@/utils/getDictionary";

export default function Hero({ locale }) {
  const { data, isLoading, error } = useMainContent(locale);
    const dict = getDictionary(locale);
  
  if (isLoading) return <FullScreenLoader />;
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Something went wrong. Please try again.
      </div>
    );
  }

  console.log("settings:", data);
console.log("stats:", data?.data?.stats);
  return (
    <section
      className="relative mt-[-200px] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${data.data.background_image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10 flex min-h-screen items-center justify-center">
        <div className="block text-center w-full lg:w-[55%] mx-auto mt-[350px] text-white">
          <AnimatedDiv delay={0.5}>
            <span className="inline-block rounded-[30px] border border-[rgba(86,158,73,0.5)] bg-[rgba(86,158,73,0.2)] px-6 py-3 text-custom14 text-white backdrop-blur-sm">
              {data.data.eyebrow}
            </span>
          </AnimatedDiv>

          <AnimatedDiv delay={1}>
            <h1 className="my-4 text-custom30 lg:text-[60px] font-bold leading-[50px] lg:leading-[80px]">
              {data.data.title}{" "}
              <span className="text-primary">
                {" "}
                {data.data.highlighted_title}{" "}
              </span>
            </h1>
          </AnimatedDiv>

          <AnimatedDiv delay={1.5}>
            <p className="text-white text-custom18 lg:text-custom18 leading-relaxed">
              {data.data.description}
            </p>
            <div className="flex gap-4 items-center justify-center my-8">
              <Link
                href={`/${locale}/projects`}
                className="flex items-center border border-primary hover:border-secondary duration-300 transition-all hover:bg-secondary py-2 px-8 gap-4 rounded-[12px]"
              >
                {dict.projects} 
                <Image
                  src="/images/arrow.png"
                  alt="arrow-right"
                  width={14}
                  height={14}
                  quality={100}
                  className={` ${locale === "en" ? "rotate-180" : ""}`}
                />
              </Link>
              <Link
                href={`/${locale}/contact-us`}
                className="text-white bg-primary duration-300 transition-all hover:bg-secondary py-2 px-8  rounded-[12px]"
              >
                {dict.contactUs}
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <AnimatedDiv delay={0.5}>
        <StatsBox locale={locale} />
      </AnimatedDiv>
    </section>
  );
}
