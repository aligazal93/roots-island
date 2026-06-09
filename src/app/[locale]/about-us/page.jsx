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
import { getDictionary } from "@/utils/getDictionary";
export default async function AboutUs({ params }) {
  const { locale } = await params;
  const mainAboutUs = await getMainAboutUs();
  const ourValues = await getValues();
  const achievements = await getAchievementsValues();
  const howWorks = await getHowWorksData();
  const dict = getDictionary(locale);

  return (
    <>
      <HeaderPage locale={locale} />
      <Road
        name={dict?.aboutUsTitle}
        items={[
          { label: dict?.home, href: `/${locale}` },
          { label: dict?.aboutUsTitle, href: `/${locale}/about-us` },
        ]}
      />
        <About  locale={locale} />
        <VisionMission data={mainAboutUs.data} locale={locale} />
        <OurValues data={ourValues} locale={locale} />
        <Achievments data={achievements} locale={locale} />
        <HowWorks data={howWorks} locale={locale} />

    </>
  );
}
