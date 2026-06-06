// src/api/services/services.api.js

import api from "@/utils/api";


export const getSettings = async () => {
    const {
        data
    } = await api.get("/settings");
    return data;
};