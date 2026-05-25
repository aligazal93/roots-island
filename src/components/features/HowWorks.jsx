import Steps from '@/components/features/Steps'
import React from 'react'

export default function HowWorks() {
  return (
          <section className="py-[50px] bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-[700px] mx-auto mb-[70px]">
            <span className="inline-flex items-center justify-center px-5 h-[36px] rounded-full bg-[#E8F3E5] text-primary text-[14px] font-[500] mb-5">
              كيف نعمل
            </span>

            <h2 className="text-custom28 leading-[1.4] font-[700] text-[#0B2E2F] mb-5">
              كيف نحول الرؤية إلى واقع
            </h2>

            <p className="text-blackGrey text-[17px] leading-[1.9]">
              من دراسة الموقع وحتى التسليم النهائي، يعمل فريقنا بخطة كاملة
              لتقديم حلول خارجية متكاملة تحقق رؤية العميل بأعلى المعايير
              الهندسية.
            </p>
          </div>

          <Steps />
        </div>
      </section>
  )
}
