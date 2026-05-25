import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProjectCard({
  categoryName,
  name,
  description,
  id,
  locale,
  pic,
}) {
  return (
    <div className="bg-white border border-[#F2F3F2] rounded-[20px] relative">
      <Image
        width={200}
        height={200}
        src={pic}
        alt="Project 1"
        className="w-full object-cover"
      />
      <span className="absolute right-4 top-4 flex items-center justify-center gap-[10px] rounded-[30px] border border-[rgba(86,158,73,0.5)] bg-[rgba(86,158,73,0.7)] px-6 py-1 text-custom14 font-bold text-white">
        {categoryName}
      </span>
      <Link
        className="block line-clamp-1 h-[62px] overflow-hidden px-4 py-4 text-custom20 font-bold text-secondary"
        href={`/${locale}/projects/${id}`}
      >
        {name}
      </Link>
      <p className="text-custom16 line-clamp-2 px-4 leading-relaxed text-blackGrey">
        {description}
      </p>
      <Link
        className="my-4  items-center flex px-4 pb-8  gap-2 text-custom18 font-bold text-primary"
        href={`/${locale}/projects/${id}`}
      >
        استكشف مشاريعنا{" "}
        <Image
          src="/images/arrow-c.png"
          alt="arrow-right"
          className="object-contain"
          width={12}
          height={12}
        />{" "}
      </Link>
    </div>
  );
}
