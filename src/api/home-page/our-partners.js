// src/api/services/services.api.js

import api from "@/utils/api";


export const getOurPartners = async () => {
  const { data } = await api.get("/home/partners");
  return data;
};