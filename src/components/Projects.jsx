"use client";
import Image from "next/image";
import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

export default function Projects() {
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
              مشاريع مميزة
            </span>
            <h2 className="text-custom32 font-bold text-white">
              أعمالنا تتحدث بكل فخر عنا
            </h2>
            <p className="text-white text-custom18 font-[500] py-4">
              مجموعة مختارة من أبرز مشاريعنا في مختلف أنحاء المملكة{" "}
            </p>
          </div>
          <button className="flex items-center border border-primary hover:border-white duration-300 transition-all hover:bg-white py-3 px-8 gap-4 text-custom16 font-bold text-primary rounded-[12px]">
            استكاف مشاريعنا{" "}
            <Image
              src="/images/arrow-c.png"
              alt="arrow-right"
              width={14}
              height={14}
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
            <SwiperSlide>
              <div className="bg-[#044446] rounded-[20px] relative">
                <Image
                  width={200}
                  height={200}
                  src="/images/proj-1.png"
                  alt="Project 1"
                  className="w-full object-contain"
                />
                <Link
                  className="text-custom24 px-4 py-4 block font-bold text-white"
                  href="/"
                >
                  مشروع رافلز – hotel and water treatment system
                </Link>
                <p className="text-custom16 line-clamp-2 px-4 leading-relaxed text-white">
                  {" "}
                  تنفيذ أعمال تنسيق المواقع الخارجية لمشروع فندقي وسكني فاخر ضمن
                  أعلى معايير الفخامة والهوية المعمارية العالمية، مع مراعاة
                  الطابع الجمالي والبيئة المحيطة للمشروع.{" "}
                </p>
                <Link
                  className="my-4  items-center flex px-4 pb-8 font-[700] gap-2 text-custom18 font-bold text-primary"
                  href="/"
                >
                  {" "}
                  استكشف مشاريعنا{" "}
                  <Image
                    src="/images/arrow-c.png"
                    alt="arrow-right"
                    className="object-contain"
                    width={12}
                    height={12}
                  />{" "}
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#044446] rounded-[20px] relative">
                <Image
                  width={200}
                  height={200}
                  src="/images/proj-2.png"
                  alt="Project 1"
                  className="w-full object-contain"
                />
                <Link
                  className="text-custom24 px-4 py-4 block font-bold text-white"
                  href="/"
                >
                 مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية
                </Link>
                <p className="text-custom16 line-clamp-2 px-4 leading-relaxed text-white">
                  {" "}
                  تنفيذ أعمال تنسيق المواقع الخارجية لمشروع فندقي وسكني فاخر ضمن
                  أعلى معايير الفخامة والهوية المعمارية العالمية، مع مراعاة
                  الطابع الجمالي والبيئة المحيطة للمشروع.{" "}
                </p>
                <Link
                  className="my-4  items-center flex px-4 pb-8  gap-2 text-custom18 font-bold text-primary"
                  href="/"
                >
                  {" "}
                  استكشف مشاريعنا{" "}
                  <Image
                    src="/images/arrow-c.png"
                    alt="arrow-right"
                    className="object-contain"
                    width={12}
                    height={12}
                  />{" "}
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-[#044446] rounded-[20px] relative">
                <Image
                  width={200}
                  height={200}
                  src="/images/proj-1.png"
                  alt="Project 1"
                  className="w-full object-contain"
                />
                <Link
                  className="text-custom24 px-4 py-4 block font-bold text-white"
                  href="/"
                >
                  مشروع رافلز – hotel and water treatment system
                </Link>
                <p className="text-custom16 line-clamp-2 px-4 leading-relaxed text-white">
                  {" "}
                  تنفيذ أعمال تنسيق المواقع الخارجية لمشروع فندقي وسكني فاخر ضمن
                  أعلى معايير الفخامة والهوية المعمارية العالمية، مع مراعاة
                  الطابع الجمالي والبيئة المحيطة للمشروع.{" "}
                </p>
                <Link
                  className="my-4  items-center flex px-4 pb-8 font-[700] gap-2 text-custom18 font-bold text-primary"
                  href="/"
                >
                  {" "}
                  استكشف مشاريعنا{" "}
                  <Image
                    src="/images/arrow-c.png"
                    alt="arrow-right"
                    className="object-contain"
                    width={12}
                    height={12}
                  />{" "}
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
