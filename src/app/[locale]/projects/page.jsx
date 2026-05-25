import HeaderPage from "@/components/layouts/HeaderPage";
import React from "react";
import Road from "../../../components/layouts/Road";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Pagination from "@/components/layouts/Paginations";

export default async function ProjectsPage({ params }) {
  const { locale } = await params;

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
      <section className="mt-[30px]">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
              locale={locale}
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
              locale={locale}
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
              locale={locale}
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              locale={locale}
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              locale={locale}
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              id={1}
              locale={locale}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              locale={locale}
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
            />

            <ProjectCard
              categoryName="أعمال اللاندسكيب"
              locale={locale}
              id={1}
              name="مشروع ديرعية جيت – هيئة تطوير بوابة الدرعية"
              description="تنفيذ أعمال تنسيق المواقع ضمن واحد من أهم المشاريع التراثية والسياحية في المملكة، مع الحفاظ على الطابع النجدي التاريخي ودمجه مع حلول لاندسكيب حديثة ومستدامة."
              pic="/images/proj-1.png"
            />
          </div>
          <div className="mt-[50px] mb-[150px]">
            <Pagination
              currentPage={1}
              totalPages={5}
              basePath={`/${locale}/projects`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
