import api from "@/utils/api";

export const getTestimonials = async () => {
  const { data } = await api.get("/home/testimonials");
  return data;
};