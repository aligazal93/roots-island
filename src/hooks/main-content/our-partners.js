import { getMainContent } from "@/api/home-page/main-content";
import { getOurPartners } from "@/api/home-page/our-partners";
import { useQuery } from "@tanstack/react-query";

export const useOurPartners = (locale) => {
  return useQuery({
    queryKey: ["partners", locale],
    queryFn: getOurPartners,
  });
};