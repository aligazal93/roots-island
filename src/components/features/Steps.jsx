import React from 'react'

export default function Steps() {
  return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "دراسة المشروع",
                desc: "تحليل الموقع ومتطلبات المشروع ووضع خطة التنفيذ الأساسية.",
              },
              {
                number: "02",
                title: "التخطيط والتنسيق",
                desc: "إعداد الجداول الزمنية والتنسيق مع جميع الأطراف المشاركة بالمشروع.",
              },
              {
                number: "03",
                title: "التنفيذ",
                desc: "تنفيذ الأعمال وفق المواصفات والمعايير المعتمدة.",
              },
              {
                number: "04",
                title: "مراقبة الجودة والتسليم",
                desc: "متابعة وتشغيل المشروع بعد التنفيذ وضمان مطابقة الجودة لجميع الملاحظات.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E7E7E7] rounded-[24px] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
              >
                <h3 className="text-[60px] leading-none font-[700] text-[#B7C5C5] mb-5">
                  {item.number}
                </h3>

                <h4 className="text-[16px] font-[700] text-secondary mb-3">
                  {item.title}
                </h4>

                <p className="text-[#7E8A8A] text-[14px] leading-[1.8]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
  )
}
