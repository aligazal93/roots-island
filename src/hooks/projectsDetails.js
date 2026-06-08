import api from "@/utils/api";

export const getProjectDetails = async (id) => {
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data;
    } catch (error) {
        console.log("Project Details Error:", error);
        return null;
    }
};