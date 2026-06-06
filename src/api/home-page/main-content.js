// src/api/services/services.api.js

import api from "@/utils/api";


export const getMainContent = async () => {
  const { data } = await api.get("/home/main-content");
  return data;
};