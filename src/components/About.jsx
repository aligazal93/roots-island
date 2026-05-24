import Image from "next/image";
import React from "react";
import AnimatedDiv from "./AnimateDiv";

export default function About() {
  return (
    <section className="relative overflow-hidden py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-18 lg:grid-cols-2">
          <div>
            <AnimatedDiv delay={0.5}>
              <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
                من نحن
              </span>
            </AnimatedDiv>

            <AnimatedDiv delay={1}>
            <h2 className="text-custom24 font-bold leading-relaxed text-[#044446]">
              خبرة راسخة في تشكيل المشهد الخارجي
            </h2>
            </AnimatedDiv>

            <AnimatedDiv delay={1.5}>

            <p className="mt-4 text-custom16 leading-relaxed text-blackGrey">
              منذ أكثر من 25 عامًا، تقود Roots Landscape مجال تصميم وتنفيذ
              اللاندسكيب في المملكة العربية السعودية، بخبرة تجمع بين الإبداع
              المعماري والدقة الهندسية، مع التزام بأعلى معايير الجودة والاستدامة
              في كل مشروع.
            </p>

            <p className="mt-4 text-custom16 leading-relaxed text-blackGrey">
              نفخر بكوننا شركاء استراتيجيين لكبرى مشاريع التطوير العقاري والبنية
              التحتية، مع فريق يضم أكثر من 200 مهندس وفني متخصص يعملون على تحويل
              الرؤى الطموحة إلى واقع ملموس.
            </p>

            </AnimatedDiv>



            <div className="mt-10 grid gap-2 sm:grid-cols-2">
              <AnimatedDiv delay={2}>
              <div className="rounded-[18px] border border-[#E5E7EB] p-4">
                <div className="mb-2 flex justify-start">
                  <img src="/images/icon-1.png" alt="" className="w-6" />
                </div>

                <h3 className="text-custom20 font-bold text-secondary">
                  الجودة
                </h3>

                <p className="mt-2 text-custom14 leading-relaxed text-blackGrey">
                  معايير تنفيذ احترافية تضمن استدامة المشروع
                </p>
              </div>
              </AnimatedDiv>

              <AnimatedDiv delay={2}>
                
              <div className="rounded-[18px] border border-[#E5E7EB] p-4">
                <div className="mb-2 flex justify-start">
                  <img src="/images/icon-2.png" alt="" className="w-6" />
                </div>

                <h3 className="text-custom20 font-bold text-secondary">
                  الاستدامة
                </h3>

                <p className="mt-2 text-custom14 leading-relaxed text-blackGrey">
                  معايير تنفيذ احترافية تضمن استدامة المشروع
                </p>
              </div>
              </AnimatedDiv>

              <AnimatedDiv delay={2}>
                              <div className="rounded-[18px] border border-[#E5E7EB] p-4">
                <div className="mb-2 flex justify-start">
                  <img src="/images/icon-3.png" alt="" className="w-6" />
                </div>

                <h3 className="text-custom20 font-bold text-secondary">
                  الدقة
                </h3>

                <p className="mt-2 text-custom14 leading-relaxed text-blackGrey">
                  معايير تنفيذ احترافية تضمن استدامة المشروع
                </p>
              </div>
              </AnimatedDiv>


            <AnimatedDiv delay={2.5}>
                            <div className="rounded-[18px] border border-[#E5E7EB] p-4">
                <div className="mb-2 flex justify-start">
                  <img src="/images/icon-4.png" alt="" className="w-6" />
                </div>

                <h3 className="text-custom20 font-bold text-secondary">
                  الابتكار
                </h3>

                <p className="mt-2 text-custom14 leading-relaxed text-blackGrey">
                  معايير تنفيذ احترافية تضمن استدامة المشروع
                </p>
              </div>
            </AnimatedDiv>


            </div>
          </div>

          <AnimatedDiv>
            <div className="relative flex justify-center">
              <Image
                src="/images/layer.png"
                alt="shape"
                className="absolute -top-16 -left-10 z-0 w-[300px] "
                width={300}
                height={300}
              />

              <div className="relative z-10 overflow-hidden rounded-[28px]">
                <Image
                  src="/images/about.png"
                  alt="about"
                  width={700}
                  height={900}
                  className="h-[600px] w-[540px] object-cover"
                />
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
