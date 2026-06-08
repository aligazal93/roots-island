import api from "@/utils/api";

export const getServiceDetails = async (id) => {
    try {
        const response = await api.get(`/services/${id}`);
        return response.data;
    } catch (error) {
        console.log("Service Details Error:", error);
        return null;
    }
};