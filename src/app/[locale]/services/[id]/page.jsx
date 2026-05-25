import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "../../../../components/layouts/Road";
import Image from "next/image";
import Link from "next/link";

const services = [
  "حلول الهاردسكيب المتكاملة",
  "تنسيق المساحات الخضراء والزراعة",
  "النباتات والأشجار والعناصر المائية",
  "المسطحات وتوريد النباتات والأشجار",
  "الصيانة والحلول المعمارية الخارجية",
  "إدارة الحدائق والمسطحات الخارجية",
  "أعمال الميكانيكا والكهرباء والسباكة",
  "خدمات الصيانة والتشغيل",
];

export const metadata = {
  title: "تفاصيل الخدمة | Roots Island",
  description:
    "تعرف على تفاصيل خدمات Roots Island في تنفيذ المشاريع الخارجية وتنسيق الحدائق والهاردسكيب بأعلى معايير الجودة.",
};

export default async function ServiceDetailsPage({ params }) {
  const { locale, id } = await params;

  return (
    <>
      <HeaderPage locale={locale} />

      <Road
        name="تفاصيل الخدمة"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "الخدمات", href: `/${locale}/services` },
          { label: "تفاصيل الخدمة" },
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
                  src="/images/pic-6.png"
                  alt="حلول الهاردسكيب المتكاملة"
                  width={1000}
                  height={550}
                  priority
                  className="h-auto w-full object-cover mb-4"
                />
              </div>

              <h1 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                حلول الهاردسكيب المتكاملة
              </h1>

              <div className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                <p>
                  حلول تنفيذ متكاملة للمساحات الخارجية تجمع بين الجودة الهندسية،
                  الجمال البصري، والاستدامة، بما يتناسب مع المشاريع السكنية
                  والتجارية والوجهات الفاخرة داخل المملكة العربية السعودية.
                </p>

                <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                  تنفيذ احترافي للمشاريع الخارجية
                </h2>

                <p className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                  نعتمد على أحدث التقنيات والخامات عالية الجودة لتنفيذ جميع
                  أعمال الهاردسكيب وتنسيق الحدائق، مع الاهتمام بأدق التفاصيل
                  لضمان أفضل النتائج.
                </p>

                <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                  ما الذي نقدمه؟
                </h2>

                <ul className="list-inside list-disc space-y-2">
                  <li className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                    تنفيذ الممرات والأرضيات الخارجية.
                  </li>
                  <li className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                    تصميم وتنسيق الحدائق.
                  </li>
                  <li className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                    تنفيذ الشلالات والعناصر المائية.
                  </li>
                  <li className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                    توريد وتركيب النباتات والأشجار.
                  </li>
                  <li className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                    أعمال الإنارة الخارجية والديكورات.
                  </li>
                </ul>

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

                {/* Images */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/pic-1.png"
                      alt="تنفيذ مشروع خارجي"
                      width={500}
                      height={320}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition-all duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src="/images/pic-2.png"
                      alt="تصميم المساحات الخارجية"
                      width={500}
                      height={320}
                      loading="lazy"
                      className="h-[280px] w-full object-cover transition-all duration-500 hover:scale-105"
                    />
                  </div>
                </div>

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
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <h2 className="mb-4 text-start text-custom18 font-bold text-secondary">
                  خدماتنا
                </h2>

                <ul className="space-y-3">
                  {services.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${locale}/services/${index + 1}`}
                        className={`block rounded-xl border px-4 py-3 text-start text-custom14 font-bold transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary ${
                          Number(id) === index + 1
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-100 text-secondary"
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
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
    </>
  );
}
