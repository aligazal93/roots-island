import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ name, description, pic }) {
  return (
    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <img src={pic} alt="" className="h-[200px] w-full object-cover" />
      <div className="p-2 text-center">
        <h3 className="my-2 text-custom14 md:text-custom16 lg:text-custom18 text-center font-bold leading-relaxed text-secondary">
          {name}
        </h3>
        <p className="text-custom14 text-center font-[500] leading-relaxed text-blackGrey line-clamp-3">
          {description}
        </p>
        <Link
          className="my-4 justify-center items-center flex px-4 gap-2 text-custom14 font-bold text-primary"
          href="/"
        >
            عرض التفاصيل
          <Image
            src="/images/arrow-c.png"
            alt="arrow-right"
            className="object-contain"
            width={14}
            height={14}
          />{" "}
        </Link>
      </div>
    </div>
  );
}
