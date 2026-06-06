import { getMainContent } from "@/api/home-page/main-content";
import { useQuery } from "@tanstack/react-query";

export const useMainContent = (locale) => {
  return useQuery({
    queryKey: ["main-content", locale],
    queryFn: getMainContent,
  });
};