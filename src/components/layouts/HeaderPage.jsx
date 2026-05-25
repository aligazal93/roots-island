"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedDiv from "../AnimateDiv";
import { FaAngleDown, FaBars } from "react-icons/fa";
import Sidenav from "./Sidenav";
import { useParams } from "next/navigation";
import { getDictionary } from "@/utils/getDictionary";
import ChangeLanguage from "./ChangeLang";
import ChangeLanguagePage from "./ChangeLangPage";

export default function HeaderPage({ locale }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dict = getDictionary(locale);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-[999999]
  transition-all duration-500 ease-in-out
  ${
    isScrolled
      ? "bg-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-gray-100 py-3"
      : "bg-white backdrop-blur-0 shadow-none border-transparent py-5"
  }`}
      >
        <div className="container">
          <div className="flex w-full items-center justify-between gap-8">
            <ul className="hidden lg:flex w-full md:flex items-center gap-4">
              <li>
                <Link
                  href="/"
                  className={`md:text-custom14 lg:text-[18px] font-[500] duration-300 transition-all hover:text-primary ${
                    isScrolled ? "text-secondary" : "text-secondary"
                  }`}
                >
                  {dict.home}
                </Link>
              </li>
              <li className="relative group">
                <button
                  className={`flex items-center gap-2 md:text-custom14 lg:text-[18px] font-[500] transition-all duration-300 hover:text-primary ${
                    isScrolled ? "text-secondary" : "text-secondary"
                  }`}
                >
                  {dict.services}

                  <FaAngleDown className="text-[14px] transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-[40px] right-[-80px] min-w-[350px] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-white rounded-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#F1F1F1] overflow-hidden py-0">
                    <Link
                      href={`/${locale}/services`}
                      className="flex items-center px-6 py-4 text-[14px] font-[700] text-secondary hover:bg-[#F8F8F8] hover:text-primary transition-all duration-300"
                    >
                      حلول الهاردسكيب المتكاملة
                    </Link>

                    <Link
                     href={`/${locale}/services`}
                      className="flex items-center px-6 py-4 text-[14px] font-[700] text-secondary hover:bg-[#F8F8F8] hover:text-primary transition-all duration-300"
                    >
                      تنسيق المساحات الخضراء والزراعة
                    </Link>

                    <Link
                     href={`/${locale}/services`}
                      className="flex items-center px-6 py-4 text-[14px] font-[700] text-secondary hover:bg-[#F8F8F8] hover:text-primary transition-all duration-300"
                    >
                      الشلالات والنوافير والعناصر المائية
                    </Link>

                    <Link
                      href={`/${locale}/services`}
                      className="flex items-center px-6 py-4 text-[14px] font-[700] text-secondary hover:bg-[#F8F8F8] hover:text-primary transition-all duration-300"
                    >
                      التصميم الخارجي
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className={`md:text-custom14 lg:text-[18px] font-[500] duration-300 transition-all hover:text-primary ${
                    isScrolled ? "text-secondary" : "text-secondary"
                  }`}
                >
                  {dict.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/ar/about-us"
                  className={`md:text-custom14 lg:text-[18px] font-[500] duration-300 transition-all hover:text-primary ${
                    isScrolled ? "text-secondary" : "text-secondary"
                  }`}
                >
                  {dict.about}
                </Link>
              </li>
            </ul>

            <AnimatedDiv
              delay={0.5}
              className="flex items-center w-full lg:justify-center justify-between gap-4"
            >
              <Link href="/">
                <Image
                  src="/images/logo-2.png"
                  width={90}
                  height={90}
                  alt="Roots logo"
                  priority
                  className="duration-300 transition-all hover:scale-110"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden flex"
              >
                <FaBars className="text-custom30 text-secondary" />{" "}
              </button>
            </AnimatedDiv>

            <ul className="hidden w-full lg:flex items-center justify-end gap-4">
              <li className="text-white">
                <ChangeLanguagePage locale={locale} isScrolled={isScrolled} />
              </li>
              <li>
                <Link  href={`/${locale}/contact-us`} className="flex items-center bg-primary text-white gap-2 text-custom14 duration-300 transition-all hover:bg-secondary font-[500] py-2 px-8 rounded-[8px]">
                  <Image
                    src="/images/call.png"
                    width={20}
                    height={20}
                    alt="lang"
                    priority
                  />{" "}
                  {dict.contactUs}
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Sidenav open={open} locale={locale} setOpen={setOpen} />
    </>
  );
}
