import api from "@/utils/api";

export const getAchievementsValues = async () => {
    try {
        const response = await api.get(`/about-us/our-achievements`);
        return response.data;
    } catch (error) {
        console.log("Achievements Error:", error?.response?.data || error);
        return null;
    }
};