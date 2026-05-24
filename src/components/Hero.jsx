import Image from "next/image";
import React from "react";
import AnimatedDiv from "./AnimateDiv";
import StatsBox from "./features/StatesBox";

export default function Hero() {
  return (
    <section
      className="relative mt-[-200px] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative z-10 flex min-h-screen items-center justify-center">
        <div className="block text-center w-full lg:w-[55%] mx-auto mt-[350px] text-white">
          <AnimatedDiv delay={0.5}>
            <span className="inline-block rounded-[30px] border border-[rgba(86,158,73,0.5)] bg-[rgba(86,158,73,0.2)] px-6 py-3 text-custom14 text-white backdrop-blur-sm">
              أعمال الكهرباء · الهاردسكيب المتكاملة · المشاريع الخارجية
            </span>
          </AnimatedDiv>

          <AnimatedDiv delay={1}>
            <h1 className="my-4 text-custom30 lg:text-[60px] font-bold leading-[50px] lg:leading-[80px]">
              نحو مساحات خارجية استثنائية في {" "}
              <span className="text-primary">المملكة العربية السعودية</span>
            </h1>
          </AnimatedDiv>

          <AnimatedDiv delay={1.5}>
            <p className="text-white text-custom18 lg:text-custom18 leading-relaxed">
              شركة متخصصة في تنسيق المواقع، أنظمة الري، الأعمال الخارجية،
              والمشاريع اللاندسكيب المتكاملة داخل المملكة العربية السعودية،
              بخبرة تنفيذية تغطي المشاريع السكنية، التجارية، والوجهات الفاخرة.
            </p>
            <div className="flex gap-4 items-center justify-center my-8">
              <button className="flex items-center border border-primary hover:border-secondary duration-300 transition-all hover:bg-secondary py-2 px-8 gap-4 rounded-[12px]">
                استكاف مشاريعنا{" "}
                <Image
                  src="/images/arrow.png"
                  alt="arrow-right"
                  width={14}
                  height={14}
                />
              </button>
              <button className="text-white bg-primary duration-300 transition-all hover:bg-secondary py-2 px-8  rounded-[12px]">
                تواصل معنا
              </button>
            </div>
          </AnimatedDiv>
        </div>
      </div>
      
      <AnimatedDiv delay={.5}>
      <StatsBox />
      </AnimatedDiv>

    </section>
  );
}
