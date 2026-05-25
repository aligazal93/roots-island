import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";

export default async function ContactUs({ params }) {
  const { locale } = await params;

  return (
    <>
      <HeaderPage locale={locale} />
      <Road
        name="تواصل معنا"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "تواصل معنا", href: `/${locale}/contact-us` },
        ]}
      />
      <section className="bg-[#f8f8fc] px-5 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
            <div className="h-full rounded-3xl border border-[#ececf4] bg-white p-8 shadow-sm">
              <form className="space-y-4 text-right">
                <div>
                  <label className="mb-2 block text-custom14 font-bold text-[#2f3048]">
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    placeholder="ادخل الاسم بالكامل"
                    className="h-[44px] w-full rounded-lg border border-[#ececf4] bg-[#fbfbfd] px-4 text-custom14 outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-custom14 font-bold text-[#2f3048]">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    placeholder="Name@example.com"
                    className="h-[44px] w-full rounded-lg border border-[#ececf4] bg-[#fbfbfd] px-4 text-custom14 outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-custom14 font-bold text-[#2f3048]">
                    رقم الهاتف
                  </label>
                  <input
                    dir="ltr"
                    type="tel"
                    placeholder="+966 500000000"
                    className="h-[44px] w-full rounded-lg border border-[#ececf4] bg-[#fbfbfd] px-4 text-right text-custom14 outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-custom14 font-bold text-[#2f3048]">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    placeholder="كيف يمكننا مساعدتك"
                    className="h-[44px] w-full rounded-lg border border-[#ececf4] bg-[#fbfbfd] px-4 text-custom14 outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-custom14 font-bold text-[#2f3048]">
                    الرسالة
                  </label>
                  <textarea
                    rows="5"
                    placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا"
                    className="w-full resize-none rounded-lg border border-[#F2F3F2] bg-[#fbfbfd] px-4 py-3 text-custom14 outline-none focus:border-primary"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="h-[48px] w-full rounded-lg bg-primary text-custom14 font-bold text-white transition hover:bg-secondary"
                >
                  إرسال الرسالة
                  <i className="fa-regular fa-paper-plane mr-2"></i>
                </button>
              </form>
            </div>

            <div className="h-full rounded-3xl border border-[#ececf4] bg-white p-8 shadow-sm">
              <div className="space-y-4 text-center lg:text-right">
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center">
                  <img
                    src="/images/address.png"
                    alt=""
                    className="h-[30px] w-[30px] object-contain"
                  />
                  <div>
                    <h3 className="text-custom16 font-bold text-[#2f3048]">
                      العنوان
                    </h3>
                    <p className="mt-2 text-custom14 text-[#7d8499]">
                      الرياض، جدة، المدينة - المملكة العربية السعودية
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                  <img
                    src="/images/envelop.png"
                    alt=""
                    className="h-[30px] w-[30px] object-contain"
                  />

                  <div>
                    <h3 className="text-custom16 font-bold text-[#2f3048]">
                      البريد الإلكتروني
                    </h3>
                    <p className="mt-2 text-custom14 text-[#7d8499]">
                      info@example.com
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                  <img
                    src="/images/phone.png"
                    alt=""
                    className="h-[30px] w-[30px] object-contain"
                  />

                  <div>
                    <h3 className="text-custom16 font-bold text-[#2f3048]">
                      الهاتف
                    </h3>
                    <p dir="ltr" className="mt-2 text-custom14 text-[#7d8499]">
                      +966 456 456 463
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start">
                  <img
                    src="/images/time.png"
                    alt=""
                    className="h-[30px] w-[30px] object-contain"
                  />

                  <div>
                    <h3 className="text-custom16 font-bold text-[#2f3048]">
                      أوقات تواجدنا
                    </h3>
                    <p className="mt-2 text-custom14 text-[#7d8499]">
                      الأحد - الخميس، ٩:٠٠ ص - ٥:٠٠ م
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#ececf4] pt-6 text-start">
                <h3 className="text-custom16 font-bold text-[#2f3048]">
                  تابعنا على وسائل التواصل
                </h3>

                <ul className="mt-5 flex items-center justify-start gap-4">
                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                      <FaFacebookF size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                      <FaInstagram size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Snapchat"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                      <FaSnapchatGhost size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                      <FaTiktok size={18} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                      className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                    >
                      <RiTwitterXFill size={18} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl">
            <iframe
              title="Roots Island Location Map"
              src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
              className="h-[300px] w-full border-0 md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
