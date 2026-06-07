import { getAboutUs } from "@/api/home-page/aboutUs";
import { useQuery } from "@tanstack/react-query";

export const useAboutUs = (locale) => {
  return useQuery({
    queryKey: ["about-us", locale],
    queryFn: getAboutUs,
  });
};