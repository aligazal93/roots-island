"use client";

import { getProjects } from "@/api/home-page/projects";
import { useQuery } from "@tanstack/react-query";

export const useProjects = (locale) => {
  return useQuery({
    queryKey: ["projects", locale],
    queryFn: () => getProjects(locale),
  });
};