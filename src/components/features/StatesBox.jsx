import Image from "next/image";

const stats = [
  {
    number: "+250",
    label: "مشروع منجز",
    icon: "/images/f-1.png",
  },
  {
    number: "+25",
    label: "عامًا من الخبرة",
    icon: "/images/f-2.png",
  },
  {
    number: "+15",
    label: "مدينة سعودية",
    icon: "/images/f-3.png",
  },
  {
    number: "+120",
    label: "متخصص وفني",
    icon: "/images/f-3.png",
  },
];

export default function StatsBox() {
  return (
    <div className="container mt-[150px] pb-[100px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[12px] bg-white/10 backdrop-blur-sm border border-white/10">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center gap-4 px-6 py-5 ${
              index !== stats.length - 1 ? "lg:border-l border-white/10" : ""
            }`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={30}
              height={30}
              className="object-contain"
            />

            <div className="text-start">
              <span className="block text-white text-custom20 font-[700] leading-6">
                {item.number}
              </span>

              <span className="block text-white text-custom16 font-[400]">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}