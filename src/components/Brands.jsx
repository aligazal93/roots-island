"use client";
import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useOurPartners } from "@/hooks/main-content/our-partners";
import LoadingCard from "./layouts/LoadingCard";
import { getDictionary } from "@/utils/getDictionary";

export default function Brands({ locale }) {
  const { data, isLoading, error } = useOurPartners(locale);
    const dict = getDictionary(locale);
  if (isLoading) {
    return <LoadingCard />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <div className=" col-span-12 lg:col-span-2">
            <h1 className="text-center font-[700] text-custom18 text-secondary">  {dict.customers} <br /> {dict.trustInUs}</h1>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <Swiper
              className="testimonials-swiper"
              modules={[Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 8000 }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 12 },
                768: { slidesPerView: 4, spaceBetween: 16 },
                1024: { slidesPerView: 6, spaceBetween: 20 },
              }}
            >

              {data?.data?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <Image
                    width={144}
                    height={70}
                    quality={100}
                    src={item?.logo}
                    alt={item?.name || "brand"}
                    className="object-fill"
                  />
                </SwiperSlide>
              ))}





            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
