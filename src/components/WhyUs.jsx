"use client";
import React from "react";
import AnimatedDiv from "./AnimateDiv";
import { getDictionary } from "@/utils/getDictionary";
import LoadingCard from "./layouts/LoadingCard";
import ErrorState from "./layouts/ErrorBox";
import { useAdvantages } from "@/hooks/main-content/advantages";

export default function WhyUs({ locale }) {
  const { data, isLoading, error } = useAdvantages(locale);
  const dict = getDictionary(locale);
  if (isLoading) return <LoadingCard />;
  if (error) return <ErrorState />;

  return (
    <section className="bg-white pb-24" dir="rtl">
      <div className="container mx-auto px-4">
        <AnimatedDiv delay={1}>
          <div className="mb-14 text-center">
            <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
              {dict?.whyChooseUsTitle}
            </span>
            <h2 className="text-custom28 font-bold leading-relaxed text-[#044446]">
              {dict?.whyChooseUsSubtitle}
            </h2>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
              {dict?.whyChooseUsDescription}
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.data?.map((advantage , index) => (
              <div key={index} className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
                <img
                  src={advantage.icon}
                  alt=""
                  className="mx-auto mb-5 w-7"
                />
                <h3 className="text-custom22 font-bold text-secondary">
                 {advantage.title}
                </h3>
                <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
