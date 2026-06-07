import { getAboutUs } from "@/api/home-page/aboutUs";
import { getAdvantages } from "@/api/home-page/advantages";
import { useQuery } from "@tanstack/react-query";

export const useAdvantages = (locale) => {
  return useQuery({
    queryKey: ["advantages", locale],
    queryFn: getAdvantages,
  });
};