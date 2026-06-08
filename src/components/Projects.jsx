"use client";
import Image from "next/image";
import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { useProjects } from "@/hooks/main-content/projects";
import LoadingCard from "./layouts/LoadingCard";
import ErrorState from "./layouts/ErrorBox";
import { getDictionary } from "@/utils/getDictionary";

export default function Projects({ locale }) {
  const { data, isLoading, error } = useProjects(locale);
  const dict = getDictionary(locale);
  if(isLoading) return <LoadingCard />;
  if(error) return <ErrorState />;
  
  return (
    <section
      className="relative py-16 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg-2.png')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:justify-between justify-center items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-[#569E49]/20 px-8 py-3 text-custom12 font-bold text-[#569E49]">
                {dict?.projects}
            </span>
            <h2 className="text-custom32 font-bold text-white">
              {dict?.ourWorksTitle}
            </h2>
            <p className="text-white text-custom18 font-[500] py-4">
              {dict?.ourWorksDescription}
            </p>
          </div>
          <button className="flex items-center border border-primary hover:border-white duration-300 transition-all hover:bg-white py-3 px-8 gap-4 text-custom16 font-bold text-primary rounded-[12px]">
           {dict?.exploreProjects}
            <Image
              src="/images/arrow-c.png"
              alt="arrow-right"
              width={14}
              height={14}
              className={`${locale === "en" ? "rotate-180" : ""} object-contain`}
            />
          </button>
        </div>

        <div className="col-span-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className="projects-swiper mt-[50px]"
            autoplay={{ delay: 8000 }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
            }}
          >
            {data?.data?.map(( project ) => (
            <SwiperSlide key={project.id}>
              <div className="bg-[#044446] rounded-[20px] relative">
                <Image
                  width={140}
                  height={200}
                  src={project.image}
                  alt={project.title}
                  className="h-[280px] w-full rounded-[20px] object-cover"
                />
                <Link
                  className="text-custom24 px-4 h-auto lg:h-[60px] overflow-hidden py-4 block font-bold text-white"
                  href={`/projects/${project.id}`}
                >
                  {project.title}
                </Link>
                <p className="text-custom16 line-clamp-2 px-4 h-auto lg:h-[50px] overflow-hidden leading-relaxed text-white">
                  {project.description}
                </p>
                <Link
                  className="my-4  items-center flex px-4 pb-8 font-[700] gap-2 text-custom18 text-primary"
                  href="/"
                >
                 {dict?.exploreProjects}
                  <Image
                    src="/images/arrow-c.png"
                    alt="arrow-right"
                    className={`${locale === "en" ? "rotate-180" : ""} object-contain`}
                    width={12}
                    height={12}
                  />{" "}
                </Link>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
