import { getSettings } from "@/api/settings";
import ContactForm from "@/components/ContactForm";
import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default async function ContactUs({ params }) {
  const { locale } = await params;

  const response = await getSettings(locale);
  const settings = response?.data;

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
              <ContactForm />
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
                      {settings?.location || "غير محدد"}
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
                      {settings?.contact_email || "غير محدد"}
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
                      {settings?.phone || "غير محدد"}
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
                      {settings?.working_hours ||
                        "الأحد - الخميس، ٩:٠٠ ص - ٥:٠٠ م"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[#ececf4] pt-6 text-start">
                <h3 className="text-custom16 font-bold text-[#2f3048]">
                  تابعنا على وسائل التواصل
                </h3>

                <ul className="mt-5 flex items-center justify-start gap-4">
                  {settings?.socials?.instagram && (
                    <li>
                      <Link
                        href={settings.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                      >
                        <FaInstagram size={18} />
                      </Link>
                    </li>
                  )}

                  {settings?.socials?.snapchat && (
                    <li>
                      <Link
                        href={settings.socials.snapchat}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Snapchat"
                        className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                      >
                        <FaSnapchatGhost size={18} />
                      </Link>
                    </li>
                  )}

                  {settings?.socials?.tiktok && (
                    <li>
                      <Link
                        href={settings.socials.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                      >
                        <FaTiktok size={18} />
                      </Link>
                    </li>
                  )}

                  {settings?.socials?.x && (
                    <li>
                      <Link
                        href={settings.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#ececf4] text-primary transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
                      >
                        <RiTwitterXFill size={18} />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl">
            <iframe
              title="Roots Island Location Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                settings?.location || "Riyadh Saudi Arabia"
              )}&z=12&output=embed`}
              className="h-[300px] w-full border-0 md:h-[400px]"
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
