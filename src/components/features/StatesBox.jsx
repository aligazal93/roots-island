import { useSettings } from "@/hooks/settings";
import { getDictionary } from "@/utils/getDictionary";
import Image from "next/image";

export default function StatsBox({ locale, stats }) {
    const dict = getDictionary(locale);
  
  return (
    <div className="container mt-[150px] pb-[100px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[12px] bg-white/10 backdrop-blur-sm border border-white/10">
        <div className={`flex items-center justify-center gap-4 px-6 py-5`}>
          <Image
            src="/images/f-1.png"
            alt="city"
            width={30}
            height={30}
            className="object-contain"
          />

          <div className="text-start">
            <span className="block text-white text-custom24 font-[700] leading-6">
              {stats?.completed_projects}
            </span>

            <span className="block text-white text-custom16 font-[700]">
                {dict.completedProjects}
            </span>
          </div>
        </div>
        <div className={`flex items-center justify-center gap-4 px-6 py-5`}>
          <Image
            src="/images/f-2.png"
            alt="city"
            width={30}
            height={30}
            className="object-contain"
          />

          <div className="text-start">
            <span className="block text-white text-custom24 font-[700] leading-6">
              {stats?.experience_years}
            </span>

            <span className="block text-white text-custom16 font-[700]">
                {dict.experience}
            </span>
          </div>
        </div>
        <div className={`flex items-center justify-center gap-4 px-6 py-5`}>
          <Image
            src="/images/f-3.png"
            alt="city"
            width={30}
            height={30}
            className="object-contain"
          />

          <div className="text-start">
            <span className="block text-white text-custom24 font-[700] leading-6">
              {stats?.saudi_cities}
            </span>

            <span className="block text-white text-custom16 font-[700]">
                {dict.saudiCities}
            </span>
          </div>
        </div>
        <div className={`flex items-center justify-center gap-4 px-6 py-5`}>
          <Image
            src="/images/f-4.png"
            alt="city"
            width={30}
            height={30}
            className="object-contain"
          />

          <div className="text-start">
            <span className="block text-white text-custom24 font-[700] leading-6">
              {stats?.specialists}
            </span>

            <span className="block text-white text-custom16 font-[700]">
                {dict.specialists}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
