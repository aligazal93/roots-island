import { getSettings } from "@/api/settings";
import { useQuery } from "@tanstack/react-query";

export const useSettings = (locale) => {
  return useQuery({
    queryKey: ["settings", locale],
    queryFn: getSettings,
  });
};