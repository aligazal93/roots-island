import AnimatedDiv from "@/components/AnimateDiv";
import React from "react";
import { FaAward, FaHandshake } from "react-icons/fa";
import { GiBrain, GiReceiveMoney } from "react-icons/gi";

export default function OurValues() {
  const values = [
    {
      title: "الجودة",
      desc: "نلتزم بأعلى المعايير في تنفيذ حلول احترافية عالية المستوى.",
      icon: FaAward,
    },
    {
      title: "الابتكار",
      desc: "نستخدم أحدث التقنيات والأفكار لتطوير حلول واقعية مبتكرة وفعالة.",
      icon: GiBrain,
    },
    {
      title: "الشراكة",
      desc: "نؤمن أن نجاح عملائنا جزء أساسي من نجاحنا.",
      icon: FaHandshake,
    },
    {
      title: "الموثوقية",
      desc: "نلتزم بالوضوح، الاستقرار، والدعم المستمر في جميع مشاريعنا.",
      icon: GiReceiveMoney,
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <AnimatedDiv delay={1}>
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex rounded-full bg-primary/10 px-5 py-2 text-custom13 font-bold text-primary">
                قيمنا
              </span>

              <h2 className="mb-4 text-custom24 font-bold text-secondary md:text-custom32">
                قيمنا التي نبني بها نجاحنا
              </h2>

              <p className="mx-auto max-w-2xl text-custom15 font-medium leading-8 text-blackGrey">
                نعتمد على مجموعة من القيم الأساسية التي تشكل أساس قوتنا وتوجه
                طريقة عملنا، لنقدم حلولاً تجمع بين الجودة، الابتكار، والالتزام
                الحقيقي تجاه عملائنا.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((item, index) => {
          const Icon = item.icon;

          return (
            <AnimatedDiv delay={1} key={index}>
                            <div
              
              className="group rounded-[20px] border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="mx-auto mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <Icon className="text-[44px]" />
              </div>

              <h3 className="mb-3 text-custom20 font-bold text-secondary">
                {item.title}
              </h3>

              <p className="text-custom14 font-medium leading-7 text-blackGrey">
                {item.desc}
              </p>
            </div>
            </AnimatedDiv>

          );
        })}
      </div>
    </div>
  );
}
