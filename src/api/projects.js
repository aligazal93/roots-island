import api from "@/utils/api";

export const getProjects = async (locale, page = 1) => {
  try {
    const response = await api.get(`/projects?page=${page}`, {
      headers: {
        "Accept-Language": locale,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Projects Error:", error?.response?.data || error);
    return null;
  }
};