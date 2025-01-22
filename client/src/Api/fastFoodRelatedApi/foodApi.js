import axiosPublic from "../../hooks/useAxiosPublic"

export const createFastFood = async(fastFoodData) => {
    const {data} = await axiosPublic.post('/fastFoods',fastFoodData);
    return data;
}

export const getFastFoodByEmail = async(searchText = '',category = '') => {
    const {data} = await axiosPublic.get(`/getFastFood/?searchText=${searchText}&category=${category}`);
    return data;
}

export const getSingleFoodById = async(id) => {
    const {data} = await axiosPublic.get(`/getSingleFastFood/${id}`);
    return data;
}