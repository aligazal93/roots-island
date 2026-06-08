import About from "@/components/About";
import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import VisionMission from "./components/Vision";
import OurValues from "./components/Values";
import Achievments from "./components/Achievments";
import HowWorks from "@/components/features/HowWorks";
import { getMainAboutUs } from "@/hooks/about-us/main-content";
import { getValues } from "@/hooks/about-us/values";
import { getAchievementsValues } from "@/hooks/about-us/achievements";
import { getHowWorksData, howWorks } from "@/hooks/about-us/howWorks";
export default async function AboutUs({ params }) {
  const { locale } = await params;
  const mainAboutUs = await getMainAboutUs();
  const ourValues = await getValues();
  const achievements = await getAchievementsValues();
  const howWorks = await getHowWorksData();

  return (
    <>
      <HeaderPage locale={locale} />
      <Road
        name="من نحن"
        items={[
          { label: "الرئيسية", href: `/${locale}` },
          { label: "من نحن", href: `/${locale}/projects` },
        ]}
      />
      <About  />

        <VisionMission data={mainAboutUs.data} />
        <OurValues data={ourValues} />
        <Achievments data={achievements} />
        <HowWorks data={howWorks} />

    </>
  );
}
