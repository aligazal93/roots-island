import React from 'react'

export default function Faqs() {
  return (
                <div className="w-full mx-auto flex flex-col gap-5">
              {[
                {
                  question:
                    "نقدم خدمات تنفيذ اللاندسكيب المتكاملة وفق أعلى معايير الجودة مع التركيز على تحقيق التوازن بين الجانب الجمالي",
                  answer:
                    "نقدم خدمات تنفيذ اللاندسكيب المتكاملة وفق أعلى معايير الجودة مع التركيز على تحقيق التوازن بين الجانب الجمالي والوظيفي، بما يضمن تنفيذ مشروع احترافي يدوم لسنوات طويلة.",
                },
                {
                  question: "كم تستغرق مدة تنفيذ مشاريع اللاندسكيب ؟",
                  answer:
                    "تختلف مدة التنفيذ حسب مساحة المشروع ومتطلبات العميل، ولكن يتم تحديد جدول زمني واضح قبل بدء التنفيذ.",
                },
                {
                  question: "هل تقدمون خدمات الصيانة الدورية بعد التنفيذ ؟",
                  answer:
                    "نعم، نقدم خدمات صيانة دورية للمسطحات الخضراء وأنظمة الري للحفاظ على جودة المشروع.",
                },
                {
                  question: "هل يمكن تنفيذ تصميم مخصص حسب طلب العميل ؟",
                  answer:
                    "بالتأكيد، يتم إعداد تصميمات خاصة تتناسب مع احتياجات العميل وطبيعة الموقع.",
                },
                {
                  question: "هل تستخدمون خامات مقاومة للعوامل الجوية ؟",
                  answer:
                    "نعم، نحرص على استخدام خامات عالية الجودة تتحمل الظروف المناخية المختلفة وتدوم لفترات طويلة.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group border border-[#E7E7E7] rounded-[22px] overflow-hidden bg-white"
                >
                  <summary className="list-none cursor-pointer flex items-center justify-between gap-5 px-8 py-7">
                    <h3 className="text-custom14 lg:text-custom18 leading-relaxed font-[700] text-secondary">
                      {item.question}
                    </h3>

                    <span className="min-w-[36px] h-[36px] rounded-full  flex items-center justify-center text-primary text-[24px] font-[300] transition-all duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="px-8 pb-8">
                    <p className="text-blackGrey text-custom14 lg:text-[16px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
  )
}
