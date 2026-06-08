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
    <div className="group overflow-hidden my-4 rounded-[24px] border border-[#EEF0EE] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-[24px]">
        <Image
          width={600}
          height={400}
          src={pic}
          alt={name}
          className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-[300px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80"></div>

        {/* Category */}
        <span className="absolute right-4 top-4 flex items-center justify-center rounded-full border border-white/20 bg-primary/90 px-5 py-2 text-custom12 lg:text-custom14 font-bold text-white backdrop-blur-md">
          {categoryName}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <Link
          href={`/${locale}/projects/${id}`}
          className="line-clamp-2 min-h-[60px] text-custom16 lg:text-custom20 font-bold leading-relaxed text-secondary transition-colors duration-300 group-hover:text-primary"
        >
          {name}
        </Link>

        <p className="line-clamp-3 text-custom14 lg:text-custom16 leading-7 text-blackGrey">
          {description}
        </p>

        <Link
          href={`/${locale}/projects/${id}`}
          className="mt-6 inline-flex items-center gap-2 text-custom14 lg:text-custom18 font-bold text-primary transition-all duration-300 hover:gap-4"
        >
          استكشف مشاريعنا

          <Image
            src="/images/arrow-c.png"
            alt="arrow-right"
            className="object-contain transition-transform duration-300 group-hover:translate-x-1"
            width={14}
            height={14}
          />
        </Link>
      </div>
    </div>
  );
}