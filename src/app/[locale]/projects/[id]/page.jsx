import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import { getProjectDetails } from "@/hooks/projectsDetails";
import { getRelatedProjects } from "@/hooks/relatedProjects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "../components/ProjectCard";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const response = await getProjectDetails(id);
  const project = response?.data;

  return {
    title: project?.title
      ? `${project.title} | Roots Island`
      : "تفاصيل المشروع | Roots Island",
    description: project?.description || "تفاصيل مشاريع Roots Island",
  };
}

export default async function ProjectsDetailsPage({ params }) {
  const { locale, id } = await params;

  const [projectResponse, relatedResponse] = await Promise.all([
    getProjectDetails(id),
    getRelatedProjects(id),
  ]);

  const project = projectResponse?.data;
  const relatedProjects = relatedResponse?.data || [];

  if (!project) notFound();

  const galleryImages = project.gallery || project.gallery_images || [];

  return (
    <>
      <HeaderPage locale={locale} />

      <Road
        name={project.title}
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "المشاريع", href: `/${locale}/projects` },
          { label: project.title },
        ]}
      />

      <section className="py-14 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              {project.image && (
                <div className="group relative overflow-hidden rounded-[28px] bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <Image
                    src={project.image}
                    alt={project.title || "Project image"}
                    width={1100}
                    height={600}
                    priority
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[480px]"
                  />

                  {project.category && (
                    <span className="absolute right-5 top-5 rounded-full border border-white/30 bg-primary/90 px-5 py-2 text-custom13 font-bold text-white backdrop-blur-md">
                      {project.category}
                    </span>
                  )}
                </div>
              )}

              <div className="mt-8 rounded-[26px] border border-[#EEF0EE] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] md:p-7">
                <h1 className="mb-4 text-custom22 font-[800] leading-relaxed text-secondary md:text-[30px]">
                  {project.title}
                </h1>

                {project.description && (
                  <p className="text-custom16 font-[500] leading-9 text-blackGrey">
                    {project.description}
                  </p>
                )}
              </div>

              {project.items?.length > 0 && (
                <div className="mt-8 space-y-5">
                  {project.items.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-[24px] border border-[#EEF0EE] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.035)] md:p-6"
                    >
                      {item.title && (
                        <h2 className="mb-3 text-custom20 font-[800] leading-relaxed text-secondary md:text-custom22">
                          {item.title}
                        </h2>
                      )}

                      {item.description && (
                        <p className="text-custom16 font-[500] leading-9 text-blackGrey">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {galleryImages.length > 0 && (
                <div className="mt-10">
                  <h2 className="mb-6 text-custom20 font-[800] leading-relaxed text-secondary md:text-custom22">
                    معرض المشروع
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-[24px] bg-gray-100 shadow-[0_14px_35px_rgba(0,0,0,0.06)]"
                      >
                        <Image
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          width={600}
                          height={380}
                          loading="lazy"
                          className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[300px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.under_images_description && (
                <div className="mt-8 rounded-[24px] border border-primary/10 bg-primary/10 p-5 md:p-6">
                  <p className="text-custom16 font-[600] leading-9 text-secondary">
                    {project.under_images_description}
                  </p>
                </div>
              )}
            </div>

            <aside className="col-span-12 lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[24px] border border-[#EEF0EE] bg-white p-5 shadow-[0_12px_35px_rgba(0,0,0,0.04)]">
                  <h3 className="mb-5 text-custom18 font-[800] text-secondary">
                    بيانات المشروع
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 text-custom14 font-[700] text-blackGrey">
                      <span>العميل</span>
                      <span className="text-start text-secondary">
                        {project.client_name || "غير محدد"}
                      </span>
                    </li>

                    <li className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 text-custom14 font-[700] text-blackGrey">
                      <span>نوع المشروع</span>
                      <span className="text-start text-secondary">
                        {project.project_type || project.category || "غير محدد"}
                      </span>
                    </li>

                    <li className="flex items-center justify-between gap-4 border-b border-gray-100 pb-4 text-custom14 font-[700] text-blackGrey">
                      <span>التاريخ</span>
                      <span className="text-start text-secondary">
                        {project.project_date || "غير محدد"}
                      </span>
                    </li>

                    <li className="flex items-center justify-between gap-4 text-custom14 font-[700] text-blackGrey">
                      <span>الموقع</span>
                      <span className="text-start text-secondary">
                        {project.location || "غير محدد"}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-[24px] bg-gradient-to-br from-[#77B96B] to-[#569E49] p-6 text-center text-white shadow-[0_18px_40px_rgba(86,158,73,0.25)]">
                  <h3 className="mb-3 text-custom18 font-bold leading-relaxed">
                    {project.side_panel?.title ||
                      "جاهزون لتنفيذ مشروعك بأعلى معايير الجودة"}
                  </h3>

                  <p className="mb-5 text-custom14 leading-7 text-white/90">
                    {project.side_panel?.description ||
                      "تواصل معنا الآن واحصل على أفضل الحلول لتنفيذ مشروعك الخارجي بأعلى جودة واحترافية."}
                  </p>

                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-3 text-custom14 font-bold transition-all duration-300 hover:bg-white hover:text-primary"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between gap-4">
              <h2 className="text-custom22 font-[800] leading-relaxed text-secondary md:text-custom24">
                مشاريع ذات صلة
              </h2>

              <Link
                href={`/${locale}/projects`}
                className="rounded-full border border-primary/20 px-5 py-2 text-custom14 font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                عرض الكل
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item) => (
                <ProjectCard
                  key={item.id}
                  categoryName={item.category}
                  id={item.id}
                  name={item.title}
                  description={item.description}
                  pic={item.image}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}