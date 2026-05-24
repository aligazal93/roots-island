import Image from "next/image";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function Road() {
  return (
<section className="relative w-full  h-[500px] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/1.png')",
    }}
  />

  <div className="absolute inset-0 bg-[#044446]/80" />

  <div className="relative z-10 text-center px-4 pt-[120px]">

    <h1 className="text-white text-custom28 md:text-[44px] font-[700] mb-5">
      خدماتنا المتكاملة
    </h1>

    <ul className="flex items-center justify-center gap-2">
      <li className="text-white text-[16px] font-[700]">
        الرئيسية
      </li>

      <li className="text-white">
        |
      </li>

      <li className="text-white text-[16px] font-[700]">
        الخدمات
      </li>
    </ul>

  </div>
</section>  );
}
