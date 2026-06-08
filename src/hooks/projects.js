import { getAboutUs } from "@/api/home-page/aboutUs";
import { getProjects } from "@/api/projects";
import { useQuery } from "@tanstack/react-query";

export const useProjects = (locale) => {
  return useQuery({
    queryKey: ["projects", locale],
    queryFn: getProjects,
  });
};