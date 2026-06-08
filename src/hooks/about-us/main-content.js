import api from "@/utils/api";

export const getMainAboutUs = async (id) => {
    try {
        const response = await api.get(`/about-us/main-content`);
        return response.data;
    } catch (error) {
        console.log("Main About Us Error:", error);
        return null;
    }
};