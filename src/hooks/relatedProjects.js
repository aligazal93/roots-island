import api from "@/utils/api";

export const getRelatedProjects = async (id) => {
    try {
        const response = await api.get(`/projects/related-projects/${id}`);
        return response.data;
    } catch (error) {
        console.log("Related Projects Error:", error);
        return null;
    }
};