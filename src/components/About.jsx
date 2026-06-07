"use client";
import Image from "next/image";
import React from "react";
import AnimatedDiv from "./AnimateDiv";
import { useAboutUs } from "@/hooks/main-content/about-us";
import { getDictionary } from "@/utils/getDictionary";
import LoadingCard from "./layouts/LoadingCard";
import ErrorState from "./layouts/ErrorBox";
import Link from "next/link";

export default function About({ locale }) {
  const dict = getDictionary(locale);
  const { data, isLoading, error } = useAboutUs(locale);
  if (isLoading) return <LoadingCard />;
  if (error) return <ErrorState />;
  return (
    <section className="relative overflow-hidden py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-18 lg:grid-cols-2">
          <div>
            <AnimatedDiv delay={0.5}>
              <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
                من نحن
              </span>
            </AnimatedDiv>

            <AnimatedDiv delay={1}>
              <h2 className="text-custom24  text- font-bold leading-relaxed text-[#044446]">
                {data?.data?.about_us?.title}
              </h2>
            </AnimatedDiv>

            <AnimatedDiv delay={1.5}>
              <p className="mt-4 text-custom16 leading-relaxed text-blackGrey ">
                {data?.data?.about_us?.description}
              </p>
            </AnimatedDiv>

            <div className="mt-10 grid gap-2 sm:grid-cols-2">
              {data?.data?.items?.map((data , index) => (
                <AnimatedDiv delay={2} key={index}>
                  <div className="rounded-[18px] border border-[#E5E7EB] p-4">
                    <div className="mb-2 flex justify-start">
                      <Link href="#">
                        <Image
                          src={data?.icon}
                          alt="icon"
                          width={24}
                          height={24}
                          className="w-6"
                        />
                      </Link>
                    </div>

                    <h3 className="text-custom20 font-bold text-secondary">
                      {data?.title}
                    </h3>

                    <p className="mt-2 h-[45px] overflow-hidden text-custom14 leading-relaxed text-blackGrey">
                      {data?.description}
                    </p>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>

          <AnimatedDiv>
            <div className="relative flex justify-center">
              <Image
                src="/images/layer.png"
                alt="shape"
                className="absolute -top-16 -left-10 z-0 w-[300px] "
                width={300}
                height={300}
              />

              <div className="relative z-10 overflow-hidden rounded-[28px]">
                <Image
                  src={data?.data?.about_us?.image || ""}
                  alt="about"
                  width={700}
                  quality={100}
                  height={900}
                  className="h-[600px] w-[540px] object-cover"
                />
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
