import AnimatedDiv from "@/components/AnimateDiv";
import { getDictionary } from "@/utils/getDictionary";
import Image from "next/image";

export default function VisionMission({ data, locale }) {
  const dict = getDictionary(locale);
  const vision = data?.vision;
  const mission = data?.mission;
  console.log(vision)
  console.log(locale)
  const items = [vision, mission].filter(Boolean);

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <AnimatedDiv key={index} delay={0.5 + index * 0.2}>
            <div className="group h-full rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
              <div className="flex items-start gap-5">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={item?.title || "icon"}
                    width={58}
                    height={58}
                    className="rounded-2xl object-contain"
                  />
                )}

                <div className={locale === "en" ? "text-left" : "text-right"}>
                  <h3 className="mb-3 text-custom20 font-bold text-secondary">
                    {item?.title}
                  </h3>

                  <p className="text-custom14 font-medium leading-8 text-blackGrey">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
}