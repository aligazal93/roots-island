// src/api/services/services.api.js

import api from "@/utils/api";


export const getAboutUs = async () => {
  const { data } = await api.get("/home/about-us");
  return data;
};