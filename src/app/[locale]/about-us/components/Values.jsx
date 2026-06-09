import AnimatedDiv from "@/components/AnimateDiv";
import { getDictionary } from "@/utils/getDictionary";
import Image from "next/image";

export default function OurValues({ data , locale }) {
  const values = Array.isArray(data) ? data : data?.data || data?.values || [];
  const dict = getDictionary(locale);
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <AnimatedDiv delay={1}>
            <div className="mx-auto mt-12 max-w-3xl text-center">
              <span className="mb-4 inline-flex rounded-full bg-primary/10 px-5 py-2 text-custom13 font-bold text-primary">
                {dict?.valuesTitle}
              </span>

              <h2 className="mb-4 text-custom24 font-bold text-secondary md:text-custom32">
               {dict?.valuesHeading}
              </h2>

              <p className="mx-auto max-w-2xl text-custom15 font-medium leading-8 text-blackGrey">
                {dict?.valuesDescription}
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((item, index) => (
          <AnimatedDiv delay={1} key={index}>
            <div className="group h-full rounded-[20px] border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
              <div className="mx-auto mb-5 flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:bg-primary/20">
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title || "value icon"}
                    width={44}
                    height={44}
                    className="h-[44px] w-[44px] object-contain"
                  />
                )}
              </div>

              <h3 className="mb-3 text-custom20 font-bold text-secondary">
                {item.title}
              </h3>

              <p className="text-custom14 font-medium leading-7 text-blackGrey">
                {item.description}
              </p>
            </div>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
}