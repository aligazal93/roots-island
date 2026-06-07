import api from "@/utils/api";

export const getServices = async () => {
  const { data } = await api.get("/home/services");
  return data;
};