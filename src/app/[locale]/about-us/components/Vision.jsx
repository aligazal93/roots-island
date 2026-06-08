import AnimatedDiv from "@/components/AnimateDiv";
import Image from "next/image";
import React from "react";
import { FaAd, FaEye, FaRegCommentDots } from "react-icons/fa";

export default function VisionMission({ data }) {
  console.log("ali");
  console.log(data);

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <AnimatedDiv delay={0.5}>
          <div className="group rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl motion-safe:animate-[fadeUp_.8s_ease_both]">
            <div className="flex items-center justify-between gap-5">
              <Image
                src={data?.vision?.image || ""}
                alt={data?.vision?.title || ""}
                width={58}
                height={58}
                className="rounded-2xl"
              />

              <div className="text-right">
                <h3 className="mb-3 text-custom20 font-bold text-secondary">
                  {data?.vision?.title || ""}
                </h3>

                <p className="text-custom14 font-medium leading-8 text-blackGrey">
                  {data?.vision?.description || ""}
                  
                </p>
              </div>
            </div>
          </div>
        </AnimatedDiv>
                <AnimatedDiv delay={0.5}>
          <div className="group rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl motion-safe:animate-[fadeUp_.8s_ease_both]">
            <div className="flex items-center justify-between gap-5">
              <Image
                src={data?.mission?.image || ""}
                alt={data?.mission?.title || ""}
                width={58}
                height={58}
                className="rounded-2xl"
              />

              <div className="text-right">
                <h3 className="mb-3 text-custom20 font-bold text-secondary">
                  {data?.mission?.title || ""}
                </h3>

                <p className="text-custom14 font-medium leading-8 text-blackGrey">
                  {data?.mission?.description || ""}
                  
                </p>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}
