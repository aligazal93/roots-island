import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
} from "react-icons/fa";
import AnimatedDiv from "../AnimateDiv";

export default function Footer() {
  return (
    <div className="bg-darkBorder pt-[150px] pb-[15px] mt-[-100px]">
      <div className="container">
        <AnimatedDiv delay={1}>
          <div className="w-[90%] flex flex-col gap-6 pb-6 md:flex-row md:items-center md:justify-between">
            <img
              src="/images/logo-footer.png"
              alt=""
              className="mx-auto max-w-[180px] md:mx-0"
            />
            <ul className="flex items-center justify-center gap-6">
              <li>
                <a href="#">
                  {" "}
                  <FaFacebookF className="text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <FaTwitter className="text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <FaInstagram className="text-white" />{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <FaSnapchatGhost className="text-white" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 gap-8 py-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-right">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="mb-3 text-custom16 font-[700] text-primary">
              شركة روتس لاندسكيب{" "}
            </h2>
            <p className="mx-auto max-w-md text-custom14 font-[400] leading-8 text-white lg:mx-0">
              رواد تصميم وتنفيذ مشاريع اللاندسكيب والإنشاءات الخارجية في المملكة
              العربية السعودية. نصنع المساحات التي تلهم.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 text-start font-[700] text-primary">
              روابط تهمك
            </h2>
            <ul className="space-y-3 text-start">
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  المدونة
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  خدمة العملاء
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  اتفاقية الاستخدام
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 text-start font-[700] text-primary">
              {" "}
              خدماتنا{" "}
            </h2>
            <ul className="space-y-3 text-start">
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  {" "}
                  حلول الهاردسكيب المتكاملة{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  نسيق المساحات الخضراء{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  والزراعة الشلالات والنوافير{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  والعناصر المائية المشاتل وتوريد{" "}
                </a>
              </li>
              <li>
                <a href="#" className="text-custom14 font-[700] text-white">
                  {" "}
                  جميع خدماتنا{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-custom16 text-start font-[700] text-primary">
              تواصل معنا
            </h2>

            <ul className="space-y-3 text-start">
              <li className="flex items-center justify-start gap-3 text-custom14 font-[500] text-white lg:justify-start">
                <img
                  className="h-[22px] w-[22px] shrink-0 object-contain"
                  src="/images/c-1.png"
                  alt=""
                />
                <span dir="ltr">+966 55 518 5244</span>
              </li>

              <li className="flex items-center justify-start gap-3 text-custom14 font-[500] text-white lg:justify-start">
                <img
                  className="h-[22px] w-[22px] shrink-0 object-contain"
                  src="/images/c-2.png"
                  alt=""
                />
                <span>info@gmail.com</span>
              </li>

              <li className="flex items-start justify-start gap-3 text-custom14 font-[500] leading-7 text-white lg:justify-start">
                <img
                  className="mt-1 h-[22px] w-[22px] shrink-0 object-contain"
                  src="/images/c-3.png"
                  alt=""
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
            شركة البوابة الفنية . جميع الحقوق محفوظة.
          </h4>

          <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-custom14 font-[500] text-white">
                سياسة الخصوصية
              </a>
            </li>
            <li>
              <a href="#" className="text-custom14 font-[500] text-white">
                الشروط والأحكام
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
