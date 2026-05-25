"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import ChangeLanguage from "./ChangeLang";
import ChangeLanguagePage from "./ChangeLangPage";

export default function Sidenav({ open, setOpen, locale }) {
  const [openServices, setOpenServices] = useState(false);

  const services = [
    { title: "حلول الهاردسكيب المتكاملة", href: `/${locale}/services/1` },
    { title: "تنسيق المساحات الخضراء والزراعة", href: `/${locale}/services/2` },
    {
      title: "الشلالات والنوافير والعناصر المائية",
      href: `/${locale}/services/3`,
    },
    { title: "التصميم الخارجي", href: `/${locale}/services/4` },
  ];

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[999999999998] bg-black/60 transition-opacity duration-300 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <div
        className={`fixed right-0 top-0 z-[999999999999] h-full w-[80%] max-w-[360px] bg-darkBorder p-5 text-white transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="إغلاق القائمة"
          className="absolute left-4 top-4"
        >
          <FaTimes size={28} />
        </button>

        <Image
          src="/images/logo-footer.png"
          alt="Roots logo"
          width={140}
          height={80}
          className="mx-auto mt-10 block h-auto"
          priority
        />

        <nav aria-label="Mobile navigation">
          <ul className="mt-10 space-y-5">
            <li>
              <Link
                href={`/${locale}`}
                onClick={() => setOpen(false)}
                className="block text-custom18 font-[500] text-white transition hover:text-primary"
              >
                الرئيسية
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setOpenServices(!openServices)}
                className="flex w-full items-center justify-between text-custom18 font-[500] text-white transition hover:text-primary"
              >
                <span>خدماتنا</span>
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    openServices ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openServices
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="overflow-hidden rounded-[14px] bg-white">
                    {services.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-[#F1F1F1] px-4 py-3 text-[14px] font-[600] text-secondary transition last:border-b-0 hover:bg-[#F8F8F8] hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href={`/${locale}/projects`}
                onClick={() => setOpen(false)}
                className="block text-custom18 font-[500] text-white transition hover:text-primary"
              >
                مشاريعنا
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/about-us`}
                onClick={() => setOpen(false)}
                className="block text-custom18 font-[500] text-white transition hover:text-primary"
              >
                عن روتس
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/contact-us`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-custom14 font-[500] text-white transition hover:bg-secondary"
              >
                <Image src="/images/call.png" width={20} height={20} alt="" />
                تواصل معنا
              </Link>
            </li>
          </ul>
        </nav>

        <div className="my-6">
          <ChangeLanguage locale={locale} />
        </div>
      </div>
    </>
  );
}
