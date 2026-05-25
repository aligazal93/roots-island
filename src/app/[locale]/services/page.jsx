import HeaderPage from "@/components/layouts/HeaderPage";
import React from "react";
import Road from "../../../components/layouts/Road";
import AnimatedDiv from "@/components/AnimateDiv";
import ServiceCard from "@/components/features/ServiceCard";
import Banner from "@/components/banner";
import Footer from "@/components/layouts/Footer";
import Faqs from "@/components/features/Faqs";
import Steps from "@/components/features/Steps";
import HowWorks from "../../../components/features/HowWorks";

export default async function AllServicesPage({ params }) {
  const { locale } = await params;
  return (
    <>
      <HeaderPage locale={locale} />
      <Road
        name="خدماتنا المتكاملة"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "الخدمات", href: `/${locale}/services` },
        ]}
      />
      <section className="my-[40px]">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
            <ServiceCard
              name="المظلات والهياكل المعمارية الخارجية"
              description="تصميم وتنفيذ مظلات وجلسات خارجية وهياكل معمارية تضيف الراحة والطابع الجمالي للمساحات المفتوحة."
              pic="/images/pic-2.png"
              id={1}
              locale={locale}
            />
          </div>
        </div>
      </section>

       <HowWorks />   

      <section className="pb-[120px] bg-white">
        <div className="container grid grid-cols-12 mx-auto px-4">
          <div className="col-span-12 lg:col-span-1"></div>
          <div className="col-span-12 lg:col-span-9">
            {/* Heading */}
            <div className="text-center max-w-[700px] mx-auto mb-[70px]">
              <span className="inline-flex items-center justify-center px-5 h-[36px] rounded-full bg-[#E8F3E5] text-primary text-[14px] font-[500] mb-5">
                ألاسئلة الشائعه
              </span>

              <h2 className="text-custom28 leading-[1.4] font-[700] text-[#0B2E2F] mb-5">
                استفسارات متكررة
              </h2>

              <p className="text-blackGrey text-[17px] leading-[1.9]">
                وفرنا بعض استفسارات العملاء الشائعة في حاله وجود استفسار خاص لا
                تتردد في الاتصال بنا
              </p>
            </div>
            {/* FAQ */}
            <Faqs />
          </div>

          <div className="col-span-12 lg:col-span-1"></div>
        </div>
      </section>
    </>
  );
}
