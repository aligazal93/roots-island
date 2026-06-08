import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "../../../../components/layouts/Road";
import Image from "next/image";
import Link from "next/link";
import { getServiceDetails } from "@/hooks/servicesDetails";
import { getServices } from "@/api/home-page/services";

export const metadata = {
  title: "تفاصيل الخدمة | Roots Island",
  description:
    "تعرف على تفاصيل خدمات Roots Island في تنفيذ المشاريع الخارجية وتنسيق الحدائق والهاردسكيب بأعلى معايير الجودة.",
};

export default async function ServiceDetailsPage({ params }) {
  const { locale, id } = await params;

  const response = await getServiceDetails(id);
  const service = response?.data;

  const servicesResponse = await getServices(locale);
  const services = servicesResponse?.data || [];

  return (
    <>
      <HeaderPage locale={locale} />

      <Road
        name="تفاصيل الخدمة"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "الخدمات", href: `/${locale}/services` },
          { label: service?.title },
        ]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              {service?.image && (
                <div className="overflow-hidden rounded-[24px]">
                  <Image
                    src={service.image}
                    alt={service?.title || "service"}
                    width={800}
                    height={350}
                    priority
                    className="mb-4 w-full h-[450px] rounded-[8px] object-cover"
                  />
                </div>
              )}

              <h1 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                {service?.title}
              </h1>

              <div className="space-y-6 text-custom16 font-[500] leading-8 text-blackGrey">
                <p>{service?.description}</p>

                {service?.items?.map((item, index) => (
                  <div key={index}>
                    <h2 className="my-2 text-custom20 font-[700] leading-relaxed text-secondary md:text-custom22">
                      {item.title}
                    </h2>

                    <p className="text-custom16 font-[500] leading-8 text-blackGrey">
                      {item.description}
                    </p>
                  </div>
                ))}

                {service?.gallery_images?.length > 0 && (
                  <div className="grid gap-6 md:grid-cols-2">
                    {service.gallery_images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-2xl">
                        <Image
                          src={image}
                          alt={service?.title || "gallery image"}
                          width={500}
                          height={320}
                          loading="lazy"
                          className="h-[280px] w-full object-cover transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {service?.under_images_description && (
                  <p className="text-custom14 font-[500] leading-8 text-blackGrey">
                    {service.under_images_description}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-12 space-y-6 lg:col-span-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <h2 className="mb-4 text-start text-custom18 font-bold text-secondary">
                  خدماتنا
                </h2>

                <ul className="space-y-3">
                  {services?.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/${locale}/services/${item.id}`}
                        className={`block rounded-xl border px-4 py-3 text-start text-custom14 font-bold transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary ${
                          String(id) === String(item.id)
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-100 text-secondary"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {service?.side_panel && (
                <div className="rounded-2xl bg-gradient-to-br from-[#77B96B] to-[#569E49] p-6 text-center text-white">
                  <h3 className="mb-3 text-custom18 font-bold leading-relaxed">
                    {service.side_panel.title}
                  </h3>

                  <p className="mb-5 text-custom14 leading-7 text-white/90">
                    {service.side_panel.description}
                  </p>

                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-3 text-custom14 font-bold transition-all duration-300 hover:bg-white hover:text-primary"
                  >
                    تواصل معنا
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
