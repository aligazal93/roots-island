import api from "@/utils/api";

export const getAdvantages = async () => {
    const {
        data
    } = await api.get("/home/advantages");
    return data;
};