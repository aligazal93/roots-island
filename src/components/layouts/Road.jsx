import Link from "next/link";
import React from "react";

export default function Road({ name, items = [] }) {
  return (
    <section className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1.png')",
        }}
      />

      <div className="absolute inset-0 bg-[#044446]/80" />

      <div className="relative z-10 px-4 pt-[120px] text-center">
        <h1 className="mb-5 text-custom22 font-[700] text-white md:text-[30px]">
          {name}
        </h1>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="text-[16px] font-[700] text-white">
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>

              {index !== items.length - 1 && (
                <li className="text-white">|</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}