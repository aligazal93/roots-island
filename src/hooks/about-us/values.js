import api from "@/utils/api";

export const getValues = async () => {
    try {
        const response = await api.get(`/about-us/our-values`);
        return response.data;
    } catch (error) {
        console.log("Values Error:", error?.response?.data || error);
        return null;
    }
};