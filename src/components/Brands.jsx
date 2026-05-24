"use client";
import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Brands() {
  return (
    <div className="py-8 ">
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-12">
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
              <SwiperSlide>
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-1.png"
                  alt="Brand 1"
                  className="object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-2.png"
                  alt="Brand 2"
                  className=" object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-3.png"
                  alt="Brand 3"
                  className=" object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-1.png"
                  alt="Brand 1"
                  className="object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-2.png"
                  alt="Brand 2"
                  className=" object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-3.png"
                  alt="Brand 3"
                  className=" object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-1.png"
                  alt="Brand 1"
                  className="object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-2.png"
                  alt="Brand 2"
                  className=" object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-3.png"
                  alt="Brand 3"
                  className=" object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={200}
                  height={200}
                  src="/images/brand-1.png"
                  alt="Brand 1"
                  className="object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-2.png"
                  alt="Brand 2"
                  className=" object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={220}
                  height={220}
                  src="/images/brand-3.png"
                  alt="Brand 3"
                  className=" object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
