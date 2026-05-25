import About from "@/components/About";
import HeaderPage from "@/components/layouts/HeaderPage";
import Road from "@/components/layouts/Road";
import { FaEye, FaRegCommentDots, FaHandshake, FaAward } from "react-icons/fa";
import { GiBrain, GiReceiveMoney } from "react-icons/gi";
import VisionMission from "./components/Vision";
import OurValues from "./components/Values";
import Achievments from "./components/Achievments";
import HowWorks from "@/components/features/HowWorks";
export default async function AboutUs({ params }) {
  const { locale } = await params;




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
      <About />

        <VisionMission />
        <OurValues />
        <Achievments />
        <HowWorks />

    </>
  );
}
