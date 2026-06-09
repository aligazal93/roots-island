"use client";
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
import { useSettings } from "@/hooks/settings";
import { useServices } from "@/hooks/main-content/services";
import LoadingCard from "./LoadingCard";
import { getDictionary } from "@/utils/getDictionary";

export default function Footer({ locale }) {
  const currentLocale = locale || "ar";
  const dict = getDictionary(locale);
  const { data, isLoading, error, refetch } = useSettings(locale);
  const {data:servicesData, servicesIsLoading} = useServices(locale);
  {
    error && (
      <ErrorState message={error.message} onRetry={refetch} locale={locale} />
    );
  }

  if (servicesIsLoading) {
    return <LoadingCard />;
  }
  return (
    <footer className="mt-[-100px] bg-darkBorder pb-[15px] pt-[150px]">
      <div className="container">
        <AnimatedDiv delay={1}>
          <div className="flex w-full flex-col gap-6 pb-6 md:flex-row md:items-center md:justify-between">
            <Link href={`/${currentLocale}`} aria-label="Roots home">
              <Image
                src={data?.data?.footer_logo || "/images/logo-footer.png"}
                alt="Roots Landscape"
                width={180}
                height={90}
                className="mx-auto h-auto max-w-[180px] md:mx-0"
              />
            </Link>
            <ul className="flex items-center justify-center gap-4">
              {[
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                  link: data?.data?.socials?.facebook,
                },
                {
                  icon: RiTwitterXFill,
                  label: "X",
                  link: data?.data?.socials?.x,
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  link: data?.data?.socials?.instagram,
                },
                {
                  icon: FaSnapchatGhost,
                  label: "Snapchat",
                  link: data?.data?.socials?.snapchat,
                },
                {
                  icon: FaTiktok,
                  label: "TikTok",
                  link: data?.data?.socials?.tiktok,
                },
              ]
                .filter((item) => item.link)
                .map(({ icon: Icon, label, link }) => (
                  <li key={label}>
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:bg-primary"
                    >
                      <Icon size={17} />
                    </Link>
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

            <p className="max-w-md text-custom14 font-[400] leading-relaxed text-white">
              {data?.data?.company_description}

            </p>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
             {dict?.importantLinks}
            </h2>

            <ul className="space-y-3">
              {[
                { title: dict?.home, href: `/${currentLocale}` },
                { title: dict?.projects, href: `/${currentLocale}/projects` },
                { title: dict?.about, href: `/${currentLocale}/about-us` },
                { title: dict?.contactUs, href: `/${currentLocale}/contact-us` },
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
              {dict?.ourServices}
            </h2>

            <ul className="space-y-3">

            {servicesData?.data?.map((service , index) => {
              return (
                <li key={service.title}>
                  <Link
                    href={`/${currentLocale}/services/${index + 1}`}
                    className="text-custom14 font-[700] text-white transition hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              )
            })}

            </ul>

          </div>

          <div>
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
            {dict?.contactUs}
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

                  <span dir="ltr">{data?.data?.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${data?.data?.contact_email}`}
                  className="flex items-center gap-3 text-custom14 font-[500] text-white transition-all duration-300 hover:text-primary"
                >
                  <Image
                    src="/images/c-2.png"
                    alt="email"
                    width={22}
                    height={22}
                    className="shrink-0 object-contain"
                  />

                  <span>{data?.data?.contact_email}</span>
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
                  {data?.data?.location}
                </span>
              </li>


                            <li className="flex items-start gap-3 text-custom14 font-[500] leading-7 text-white">
                <Image
                  src="/images/time.png"
                  alt=""
                  width={22}
                  height={22}
                  className="mt-1 shrink-0 object-contain"
                />
                <span>
                  {data?.data?.working_hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-5 text-center md:flex-row">
          <h4 className="text-custom14 font-[700] text-white">
            {dict?.copyright}
          </h4>

          <ul className="flex items-center gap-4">
            <li>
              <Link
                href={`/${currentLocale}/privacy-policy`}
                className="text-custom14 font-[500] text-white transition hover:text-primary"
              >
               {dict?.privacyPolicy}
              </Link>
            </li>

            <li>
              <Link
                href={`/${currentLocale}/terms`}
                className="text-custom14 font-[500] text-white transition hover:text-primary"
              >
               {dict?.termsConditions}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
