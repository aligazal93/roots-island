import { getAboutUs } from "@/api/home-page/aboutUs";
import { getTestimonials } from "@/api/home-page/testimonials";
import { useQuery } from "@tanstack/react-query";

export const useTestimonials = (locale) => {
  return useQuery({
    queryKey: ["testimonials", locale],
    queryFn: getTestimonials,
  });
};