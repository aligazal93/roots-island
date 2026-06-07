"use client";

import { getServices } from "@/api/home-page/services";
import { useQuery } from "@tanstack/react-query";

export const useServices = (locale) => {
  return useQuery({
    queryKey: ["services", locale],
    queryFn: () => getServices(locale),
  });
};