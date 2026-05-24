import React from "react";
import AnimatedDiv from "./AnimateDiv";

export default function WhyUs() {
  return (
    <section className="bg-white pb-24" dir="rtl">
      <div className="container mx-auto px-4">
        <AnimatedDiv delay={1}>
        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full bg-[#569E49]/15 px-5 py-2 text-sm font-bold text-[#569E49]">
            ما يميزنا
          </span>

          <h2 className="text-custom28 font-bold leading-relaxed text-[#044446]">
            التميز الذي يصنع الفرق
          </h2>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
            نقدم قيمة حقيقية تتجاوز توقعات عملائنا في كل مشروع
          </p>
        </div>
        </AnimatedDiv>

        <AnimatedDiv>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-1.png" alt="" className="mx-auto mb-5 w-7" />
            <h3 className="text-custom22 font-bold text-secondary">
              تنفيذ احترافي
            </h3>
            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
              فريق تنفيذ محترف بخبرة واسعة في الجودة والدقة
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-2.png" alt="" className="mx-auto mb-5 w-7" />

            <h3 className="text-custom22 font-bold text-secondary">
              إدارة مشاريع فعالة
            </h3>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
              متابعة دقيقة للمشاريع لضمان التسليم في الوقت المحدد
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-3.png" alt="" className="mx-auto mb-5 w-7" />

            <h3 className="text-custom22 font-bold text-secondary">
              التزام بالجودة
            </h3>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
              معايير جودة عالية ومراجعة مستمرة في كل مرحلة
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-4.png" alt="" className="mx-auto mb-5 w-7" />

            <h3 className="text-custom22 font-bold text-secondary">حلول مستدامة</h3>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
            نعتمد ممارسات صديقة للبيئة وحلولاً مستدامة في جميع أعمالنا  نستخدم  صديقة للبيئة وحلول مستدامة
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-5.png" alt="" className="mx-auto mb-5 w-7" />

            <h3 className="text-custom22 font-bold text-secondary">  فريق هندسي متخصص</h3>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
             نخبة من المهندسين وخبراء اللاندسكيب المعتمدين دوليًا
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] p-8 text-center">
            <img src="/images/v-6.png" alt="" className="mx-auto mb-5 w-7" />

            <h3 className="text-custom22 font-bold text-secondary">خبرة بالمشاريع الكبرى  </h3>

            <p className="mt-3 w-[80%] mx-auto text-center text-custom16 leading-relaxed text-blackGrey">
                سجل حافل في تنفيذ أضخم مشاريع اللاندسكيب في المملكة
            </p>
          </div>
        </div>
        </AnimatedDiv>


      </div>
    </section>
  );
}
