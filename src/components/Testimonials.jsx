"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import TestimonialsCard from "./features/TestimonialsCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    comment:
      "تعامل احترافي من البداية حتى التسليم. فريق Roots Landscape حصل المساحات الخارجية لمشروعنا إلى تحفة فنية حقيقية. أنصح بهم بشدة.",
    client_name: "أحمد محمد",
    client_position: "مدير مشروع",
  },
  {
    comment:
      "دقة المواعيد وجودة التنفيذ فاقت توقعاتنا. المشروع تم تسليمه قبل الموعد المحدد وبمواصفات أعلى مما تم الاتفاق عليه.",
    client_name: "سارة خالد",
    client_position: "مديرة تسويق",
  },
  {
    comment: "خبرة واضحة في التفاصيل والتنفيذ، أنصح بالتعامل معهم.",
    client_name: "محمد العتيبي",
    client_position: "مالك مشروع",
  },
  {
    comment: "خبرة واضحة في التفاصيل والتنفيذ، أنصح بالتعامل معهم.",
    client_name: "محمد العتيبي",
    client_position: "مالك مشروع",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-10">
      <div className="container grid grid-cols-12">
        <div className="col-span-12 text-center">
          <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
            أراء العملاء
          </span>

          <h2 className="text-custom28 font-bold leading-relaxed text-[#044446]">
            ثقة شركائنا هي أعظم إنجازاتنا
          </h2>

          <p className="mx-auto mb-8 mt-3 w-[80%] text-custom16 leading-relaxed text-blackGrey">
            ماذا يقول عملاؤنا وشركاؤنا عن تجربتهم معنا
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
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialsCard
                  comment={item.comment}
                  clientName={item.client_name}
                  clientPosition={item.client_position}
                  rating={item.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
