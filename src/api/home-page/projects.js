import api from "@/utils/api";

export const getProjects = async () => {
  const { data } = await api.get("/home/projects");
  return data;
};