"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaChevronDown, FaTimes } from "react-icons/fa";

export default function Sidenav({ open, setOpen }) {
  const [openServices, setOpenServices] = useState(false);

  const services = [
    {
      title: "حلول الهاردسكيب المتكاملة",
      href: "/services/landscape",
    },
    {
      title: "تنسيق المساحات الخضراء والزراعة",
      href: "/services/irrigation",
    },
    {
      title: "الشلالات والنوافير والعناصر المائية",
      href: "/services/maintenance",
    },
    {
      title: "التصميم الخارجي",
      href: "/services/design",
    },
  ];
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[999999999998] bg-black/60 transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed xl:hidden top-0 right-0 h-full w-[70%] bg-darkBorder text-white transform transition-all duration-300 z-[999999999999] p-5 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute left-4 "
          onClick={() => setOpen(false)}
          aria-label="إغلاق القائمة"
        >
          <FaTimes size={30} className="text-white" />
        </button>
        <Image
          src="/images/logo-footer.png"
          alt="logo"
          width={140}
          height={140}
          className="block mt-10 mx-auto"
        />
        <nav>
          <ul className="mt-[40px]">
            <li className="mt-4">
              <Link
                className="text-custom18 my-2 font-[500] duration-300 transition-all hover:text-primary text-white"
                href="/"
              >
                الرئيسية
              </Link>
            </li>


                        <li className="mt-4">
              <button
                type="button"
                onClick={() => setOpenServices(!openServices)}
                className="w-full flex items-center justify-between rounded-[12px] mt-2 text-[16px] font-[700] text-white hover:text-primary transition-all duration-300"
              >
                <span>خدماتنا</span>

                <FaAngleDown
                  className={`text-[14px] transition-transform duration-300 ${
                    openServices ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openServices
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col rounded-[14px] border border-[#eee] bg-white overflow-hidden">
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="px-4 py-3 text-[14px] font-[600] text-secondary border-b border-[#F1F1F1] last:border-b-0 hover:bg-[#F8F8F8] hover:text-primary transition-all duration-300"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>



            <li className="mt-4">
              <Link
                className="text-custom18 my-2 font-[500] duration-300 transition-all hover:text-primary text-white"
                href="/"
              >
                مشاريعنا
              </Link>
            </li>
            <li className="mt-4">
              <Link
                className="text-custom18 mt-2 font-[500] duration-300 transition-all hover:text-primary text-white"
                href="/"
              >
                عن روتس
              </Link>
            </li>
            <li className="mt-4">
              <button className="flex duration-300 transition-all hover:text-primary px-4 py-2 items-center gap-2 outline-none">
                En
                <Image
                  src="/images/lang.png"
                  width={20}
                  height={20}
                  alt="lang"
                  priority
                />{" "}
              </button>
            </li>
            <li className="mt-4">
              <button className="flex items-center bg-primary text-white gap-2 text-custom14 duration-300 transition-all hover:bg-secondary font-[500] py-3 px-6 rounded-[8px]">
                <Image
                  src="/images/call.png"
                  width={20}
                  height={20}
                  alt="lang"
                  priority
                />{" "}
                تواصل معنا{" "}
              </button>{" "}
            </li>




          </ul>
        </nav>
      </div>
    </>
  );
}
