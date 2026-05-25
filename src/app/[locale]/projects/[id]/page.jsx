import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
  title: "تفاصيل الخدمة | Roots Island",
  description:
    "تعرف على تفاصيل خدمات Roots Island في تنفيذ المشاريع الخارجية وتنسيق الحدائق والهاردسكيب بأعلى معايير الجودة.",
};

export default async function ProjectsDetailsPage({ params }) {
  const { locale, id } = await params;

  return (
    <>
      <HeaderPage locale={locale} />

      <Road
        name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "المشاريع", href: `/${locale}/services` },
          { label: "تفاصيل المشروع" },
        ]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Content */}
            <div className="col-span-12 lg:col-span-9">
              {/* Main Image */}
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/images/proj-2.png"
                  alt="حلول الهاردسكيب المتكاملة"
                  width={1000}
                  height={550}
                  priority
                 className="h-[360px] w-full rounded-[24px] object-cover"
                />
              </div>

              <h1 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                نظرة عامة على المشروع
              </h1>

              <div className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                <p>
                  يعد مشروع AMAALA Staff Village أحد المشاريع التطويرية الحديثة
                  التي تتطلب تنفيذ أعمال خارجية بمعايير عالية من الجودة
                  والاستدامة. تولت Roots Landscape تنفيذ أعمال Site Furniture
                  والعناصر الخارجية بما يتوافق مع متطلبات المشروع والهوية
                  المعمارية للموقع، مع الحرص على تحقيق التكامل بين الوظيفة
                  العملية والجودة البصرية للمساحات الخارجية.
                </p>

                <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                  نطاق الأعمال
                </h2>

                <p className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                  نقدم خدمات تنفيذ اللاندسكيب المتكاملة وفق أعلى معايير الجودة،
                  مع التركيز على تحقيق التوازن بين الجانب الجمالي والوظيفي
                  للمشروع.نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية.نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية. نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية.
                </p>

                <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                  تحديات المشروع
                </h2>

                <p className="space-y-6 text-custom14 font-[500] leading-8 text-blackGrey">
                  نقدم خدمات تنفيذ اللاندسكيب المتكاملة وفق أعلى معايير الجودة،
                  مع التركيز على تحقيق التوازن بين الجانب الجمالي والوظيفي
                  للمشروع.نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية.نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية. نعمل على إدارة جميع مراحل التنفيذ بداية من تجهيز
                  الموقع وحتى التسليم النهائي، باستخدام مواد عالية الجودة وفرق
                  متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات الفنية والجداول
                  الزمنية.
                </p>

                <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                  معرض المشروع
                </h2>

                {/* Images */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/proj-1.png"
                      alt="تنفيذ مشروع خارجي"
                      width={500}
                      height={320}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/proj-2.png"
                      alt="تصميم المساحات الخارجية"
                      width={500}
                      height={320}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition-all duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="rounded-[20px] bg-[rgba(86,158,73,0.1)] p-4">
                  <p className="space-y-6 text-custom16 font-[500] leading-8 text-secondary">
                    نقدم خدمات تنفيذ اللاندسكيب المتكاملة وفق أعلى معايير
                    الجودة، مع التركيز على تحقيق التوازن بين الجانب الجمالي
                    والوظيفي للمشروع.نعمل على إدارة جميع مراحل التنفيذ بداية من
                    تجهيز الموقع وحتى التسليم النهائي، باستخدام مواد عالية
                    الجودة وفرق متخصصة تضمن دقة التنفيذ والالتزام بالمواصفات
                    الفنية والجداول الزمنية.نعمل على إدارة جميع مراحل التنفيذ
                    بداية من تجهيز الموقع وحتى التسليم النهائي، باستخدام مواد
                    عالية الجودة وفرق متخصصة تضمن دقة التنفيذ والالتزام
                    بالمواصفات الفنية والجداول الزمنية. نعمل على إدارة جميع
                    مراحل التنفيذ بداية من تجهيز الموقع وحتى التسليم النهائي،
                    باستخدام مواد عالية الجودة وفرق متخصصة تضمن دقة التنفيذ
                    والالتزام بالمواصفات الفنية والجداول الزمنية.{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <ul>
                  <li className="flex justify-between items-center text-custom14 my-4 font-[700]  text-blackGrey">
                    العميل
                    <span className="text-secondary">هنا اسم العميل</span>
                  </li>
                  <li className="flex justify-between items-center text-custom14 my-4 font-[700]  text-blackGrey">
                    نوع المشروع
                    <span className="text-secondary">هنا اسم المشروع</span>
                  </li>
                  <li className="flex justify-between items-center text-custom14 my-4 font-[700]  text-blackGrey">
                    التاريخ
                    <span className="text-secondary">
                      تاريخ المشروع هنا
                    </span>{" "}
                  </li>
                  <li className="flex justify-between items-center text-custom14 my-4 font-[700]  text-blackGrey">
                    الموقع
                    <span className="text-secondary">
                      الموقع أو مكان المشروع هنا
                    </span>{" "}
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-[#77B96B] to-[#569E49] p-6 text-center text-white">
                <h3 className="mb-3 text-custom18 font-bold leading-relaxed">
                  جاهزون لتنفيذ مشروعك بأعلى معايير الجودة
                </h3>

                <p className="mb-5 text-custom14 leading-7 text-white/90">
                  تواصل معنا الآن واحصل على أفضل الحلول لتنفيذ مشروعك الخارجي
                  بأعلى جودة واحترافية.
                </p>

                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-3 text-custom14 font-bold transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="container">
          <h2 className="mb-8 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
            مشاريع اخري مميزة
          </h2>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <ProjectCard
                categoryName="أعمال اللاندسكيب"
                locale={locale}
                id={1}
                name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
                description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
                pic="/images/proj-1.png"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <ProjectCard
                categoryName="أعمال اللاندسكيب"
                locale={locale}
                id={2}
                name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
                description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
                pic="/images/proj-1.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
