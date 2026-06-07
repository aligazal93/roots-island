"use client";
import React from "react";
import AnimatedDiv from "./AnimateDiv";
import { useServices } from "@/hooks/main-content/services";
import Link from "next/link";
import Image from "next/image";
import LoadingCard from "./layouts/LoadingCard";
import ErrorState from "./layouts/ErrorBox";
import { getDictionary } from "@/utils/getDictionary";

export default function Services({ locale }) {
    const { data, isLoading, error } = useServices(locale);
      const dict = getDictionary(locale);
    

    if(isLoading) return <LoadingCard />;
    if(error) return <ErrorState />;
  
  return (
    <section className="bg-white pb-[50px]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#569E49]/20 px-6 py-2 text-custom12 font-bold text-[#569E49]">
            {dict?.distinctive_projects}
          </span>

          <h2 className="text-custom24 font-[700] leading-[1.6] text-[#044446] md:text-custom30">
           {dict?.servicesMainTitle}
          </h2>

          <p className="mx-auto mt-3 text-custom16 leading-7 text-gray-500">
            {dict?.servicesMainDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data?.data?.map(( service ) => (
            <AnimatedDiv delay={0.2} key={service.id}>
              
            <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Link href={`/services/${service.id}`}>
              <Image
                quality={100}
                src={service.image}
                alt={service.slug}
                width={180}
                height={150}
                className="h-[160px] w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="mb-1 text-custom16 md:text-custom20 lg:text-custom20 h-auto lg:h-[34px] overflow-hidden text-start font-bold leading-relaxed text-[#569E49]">
                  {service.title}
                </h3>
                <p className="text-custom14 text-start font-[500] leading-relaxed text-blackGrey line-clamp-3">
                  {service.description}
                </p>
              </div>
              </Link>
            </div>
          </AnimatedDiv>
          ))}


        </div>
      </div>
    </section>
  );
}
