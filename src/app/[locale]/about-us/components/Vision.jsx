import AnimatedDiv from "@/components/AnimateDiv";
import React from "react";
import { FaEye, FaRegCommentDots } from "react-icons/fa";

export default function VisionMission() {
  const visionMission = [
    {
      title: "رؤيتنا",
      desc: "أن نكون من الشركات الرائدة في تنفيذ أعمال اللاندسكيب والحلول الخارجية المتكاملة داخل المملكة العربية السعودية، من خلال تقديم مشاريع تجمع بين الجودة، الاستدامة، والهوية المعمارية الحديثة.",
      icon: FaEye,
    },
    {
      title: "رسالتنا",
      desc: "نلتزم بتقديم حلول تنفيذ احترافية للمساحات الخارجية تعتمد على جودة العمل، دقة التفاصيل، والالتزام بأعلى المعايير، بما يساهم في تطوير بيئات خارجية عملية وجمالية تلبي تطلعات عملائنا.",
      icon: FaRegCommentDots,
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {visionMission.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedDiv delay={0.5} key={index}>
            <div
              className="group rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl motion-safe:animate-[fadeUp_.8s_ease_both]"
            >
              <div className="flex items-center justify-between gap-5">
                <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                  <Icon className="text-[42px]" />
                </div>
                <div className="text-right">
                  <h3 className="mb-3 text-custom20 font-bold text-secondary">
                    {item.title}
                  </h3>

                  <p className="text-custom14 font-medium leading-8 text-blackGrey">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
            </AnimatedDiv>

          );
        })}
      </div>
    </div>
  );
}
