import api from "@/utils/api";

export const getHowWorksData = async () => {
    try {
        const response = await api.get(`/about-us/how-we-work`);
        return response.data;
    } catch (error) {
        console.log("HowWorks Error:", error?.response?.data || error);
        return null;
    }
};