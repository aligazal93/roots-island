import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import AnimatedDiv from "../AnimateDiv";

export default function Footer({ locale }) {
  const currentLocale = locale || "ar";

  return (
    <footer className="mt-[-100px] bg-darkBorder pb-[15px] pt-[150px]">
      <div className="container">
        <AnimatedDiv delay={1}>
          <div className="flex w-full flex-col gap-6 pb-6 md:flex-row md:items-center md:justify-between">
            <Link href={`/${currentLocale}`} aria-label="Roots home">
              <Image
                src="/images/logo-footer.png"
                alt="Roots Landscape"
                width={180}
                height={90}
                className="mx-auto h-auto max-w-[180px] md:mx-0"
              />
            </Link>

            <ul className="flex items-center justify-center gap-4">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: RiTwitterXFill, label: "X" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaSnapchatGhost, label: "Snapchat" },
                { icon: FaTiktok, label: "TikTok" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-primary"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 gap-8 py-10 text-start sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
              شركة روتس لاندسكيب
            </h2>

            <p className="max-w-md text-custom14 font-[400] leading-8 text-white">
              رواد تصميم وتنفيذ مشاريع اللاندسكيب والإنشاءات الخارجية في المملكة
              العربية السعودية. نصنع المساحات التي تلهم.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
              روابط تهمك
            </h2>

            <ul className="space-y-3">
              {[
                { title: "الرئيسية", href: `/${currentLocale}` },
                { title: "مشاريعنا", href: `/${currentLocale}/projects` },
                { title: "من نحن", href: `/${currentLocale}/about-us` },
                { title: "اتصل بنا", href: `/${currentLocale}/contact-us` },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-custom14 font-[700] text-white transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
              خدماتنا
            </h2>

            <ul className="space-y-3">
              {[
                { title: "جميع خدماتنا", href: `/${currentLocale}/services` },
                {
                  title: "حلول الهاردسكيب المتكاملة",
                  href: `/${currentLocale}/services/1`,
                },
                {
                  title: "تنسيق المساحات الخضراء",
                  href: `/${currentLocale}/services/2`,
                },
                {
                  title: "الشلالات والنوافير",
                  href: `/${currentLocale}/services/3`,
                },
                {
                  title: "العناصر المائية والمشاتل",
                  href: `/${currentLocale}/services/4`,
                },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-custom14 font-[700] text-white transition hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
              تواصل معنا
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+9665512345678"
                  className="flex items-center gap-3 text-custom14 font-[500] text-white transition-all duration-300 hover:text-primary"
                >
                  <Image
                    src="/images/c-1.png"
                    alt="phone"
                    width={22}
                    height={22}
                    className="shrink-0 object-contain"
                  />

                  <span dir="ltr">+966 5512345678</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@gmail.com"
                  className="flex items-center gap-3 text-custom14 font-[500] text-white transition-all duration-300 hover:text-primary"
                >
                  <Image
                    src="/images/c-2.png"
                    alt="email"
                    width={22}
                    height={22}
                    className="shrink-0 object-contain"
                  />

                  <span>info@gmail.com</span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-custom14 font-[500] leading-7 text-white">
                <Image
                  src="/images/c-3.png"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-1 shrink-0 object-contain"
                />
                <span>
                  الرياض - جدة - المدينة، <br /> المملكة العربية السعودية
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-5 text-center md:flex-row">
          <h4 className="text-custom14 font-[700] text-white">
            شركة روتس لاندسكيب . جميع الحقوق محفوظة.
          </h4>

          <ul className="flex items-center gap-4">
            <li>
              <Link
                href={`/${currentLocale}/privacy-policy`}
                className="text-custom14 font-[500] text-white transition hover:text-primary"
              >
                سياسة الخصوصية
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLocale}/terms`}
                className="text-custom14 font-[500] text-white transition hover:text-primary"
              >
                الشروط والأحكام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
