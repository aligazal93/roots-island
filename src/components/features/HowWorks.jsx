import Steps from "@/components/features/Steps";
import React from "react";

export default function HowWorks({ data }) {
  const steps = Array.isArray(data) ? data : data?.data || [];

  return (
    <section className="bg-white py-[50px]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-[70px] max-w-[700px] text-center">
          <span className="mb-5 inline-flex h-[36px] items-center justify-center rounded-full bg-[#E8F3E5] px-5 text-[14px] font-[500] text-primary">
            كيف نعمل
          </span>

          <h2 className="mb-5 text-custom28 font-[700] leading-[1.4] text-[#0B2E2F]">
            كيف نحول الرؤية إلى واقع
          </h2>

          <p className="text-[17px] leading-[1.9] text-blackGrey">
            من دراسة الموقع وحتى التسليم النهائي، يعمل فريقنا بخطة كاملة لتقديم
            حلول خارجية متكاملة تحقق رؤية العميل بأعلى المعايير الهندسية.
          </p>
        </div>

        <Steps data={steps} />
      </div>
    </section>
  );
}