import Image from "next/image";
import React from "react";
import AnimatedDiv from "./AnimateDiv";

export default function Banner() {
  return (
       <AnimatedDiv delay={1}>
              <div className="container relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="p-6 bg-gradient-to-b from-[#77B96B] to-[#569E49] text-[22px] rounded-[12px]">
              <h2 className="text-white text-custom22 lg:text-custom30 py-2 font-[700] text-center">
                {" "}
                جاهزون لتحويل رؤيتك إلى مشروع استثنائي{" "}
              </h2>
              <p className="text-white text-custom14 w-full lg:w-1/2 mx-auto py-2 font-[500] text-center">
                {" "}
                دعنا نصنع معًا مساحات خارجية تلهم وتذهل. فريقنا جاهز لدراسة
                مشروعك وتقديم الحل الأمثل.{" "}
              </p>
              <button className="flex items-center duration-300 hover:bg-secondary justify-center gap-2 p-3 mt-[8px] mb-[10px]  mx-auto rounded-[8px] w-[250px] bg-transparent border-2 font-bold border-white text-center text-white text-[16px]">
                {" "}
                ابدأ مشروعك الان{" "}
                <Image
                  src="/images/arrow.png"
                  alt="arrow-right"
                  width={14}
                  height={14}
                />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
       </AnimatedDiv>     
  );
}
