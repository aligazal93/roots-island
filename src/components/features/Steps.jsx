import React from "react";

export default function Steps({ data = [] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {data.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <div
            key={item.id || index}
            className="group rounded-[24px] border border-[#E7E7E7] bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
          >
            <h3 className="mb-5 text-[60px] font-[700] leading-none text-[#B7C5C5] transition-all duration-500 group-hover:text-primary/30">
              {number}
            </h3>

            <h4 className="mb-3 text-[16px] font-[700] text-secondary">
              {item.title}
            </h4>

            <p className="text-[14px] leading-[1.8] text-[#7E8A8A]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}