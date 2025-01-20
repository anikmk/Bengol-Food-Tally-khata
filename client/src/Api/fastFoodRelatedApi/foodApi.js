import axiosPublic from "../../hooks/useAxiosPublic"

export const createFastFood = async(fastFoodData) => {
    const {data} = await axiosPublic.post('/fastFoods',fastFoodData);
    return data;
}

export const getFastFoodByEmail = async(email,searchText = '',category = '') => {
    const {data} = await axiosPublic.get(`/getFastFood/?email=${email}&searchText=${searchText}&category=${category}`);
    return data;
}