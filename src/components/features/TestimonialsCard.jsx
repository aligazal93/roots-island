import React from "react";

export default function TestimonialsCard({ comment, clientName, clientPosition, rating }) {

  return (
    <div className="relative border border-[#F2F3F2] rounded-[12px] p-4 md:p-10 bg-white pt-[0px]">
      <p className="text-secondary h-[100px] text-custom14 text-justify leading-relaxed font-[500] line-clamp-3 mb-[0px] block w-full">
        {comment}
      </p>
      <div className="flex items-ceenter gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-[#1D2939] flex items-center justify-center">
          <span className="text-white font-[700]">  {clientName?.[0] || ""} </span>
        </div>
        <div>
          <h1 className="text-custom18 font-[700] text-secondary">
            {clientName}
          </h1>
          <span className="text-custom14 font-[500] text-grey">
            {clientPosition}
          </span>
        </div>
      </div>
    </div>
  );
}
