// components/Pagination.jsx

"use client";

import Link from "next/link";

export default function Pagination({ currentPage = 1, totalPages = 5, basePath }) {
  return (
    <div className="mt-14 flex items-center justify-center gap-6">
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === Number(currentPage);

        return (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`flex h-[60px] w-[60px] items-center justify-center rounded-full border text-[18px] font-bold transition-all duration-300 ${
              isActive
                ? "border-primary bg-primary text-white"
                : "border-[#EEEEEE] bg-white text-[#555] hover:border-primary hover:text-primary"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}