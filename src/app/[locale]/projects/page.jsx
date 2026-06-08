import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "../../../components/layouts/Road";
import ProjectCard from "./components/ProjectCard";
import Pagination from "@/components/layouts/Paginations";
import { getProjects } from "@/api/projects";

export default async function ProjectsPage({ params, searchParams }) {
  const { locale } = await params;
  const { page } = await searchParams;

  const currentPage = Number(page) || 1;

  const response = await getProjects(locale, currentPage);

  const projects = response?.data || [];
  const pagination = response?.additionalData?.pagination;

  if (!projects.length) return null;

  const totalPages = Math.ceil(
    pagination.total / pagination.per_page
  );

  return (
    <>
      <HeaderPage locale={locale} />

      <Road
        name="مشاريعنا"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "مشاريعنا", href: `/${locale}/projects` },
        ]}
      />

      <section className="mt-[30px] mb-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((item) => (
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

          {totalPages > 1 && (
            <div className="mb-[150px] mt-[50px]">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={`/${locale}/projects`}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}