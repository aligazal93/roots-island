"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialsCard from "./features/TestimonialsCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useTestimonials } from "@/hooks/main-content/testimonials";
import { getDictionary } from "@/utils/getDictionary";
import LoadingCard from "./layouts/LoadingCard";
import ErrorState from "./layouts/ErrorBox";

export default function Testimonials( { locale } ) {

    const { data, isLoading, error } = useTestimonials(locale);
    const dict = getDictionary(locale);
    if (isLoading) return <LoadingCard />;
    if (error) return <ErrorState />;

  return (
    <section className="bg-white py-10">
      <div className="container grid grid-cols-12">
        <div className="col-span-12 text-center">
          <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
           {dict?.clientsReviewsTitle}
          </span>

          <h2 className="text-custom28 font-bold leading-relaxed text-[#044446]">
            {dict?.clientsReviewsSubtitle}
          </h2>

          <p className="mx-auto mb-8 mt-3 w-[80%] text-custom16 leading-relaxed text-blackGrey">
            {dict?.clientsReviewsDescription}
          </p>
        </div>

        <div className="col-span-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            className="testimonials-swiper"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard
                  comment={item.quote}
                  clientName={item.name}
                  clientPosition={item.role}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
