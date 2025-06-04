import axiosPublic from "../../hooks/useAxiosPublic"

export const getAllProducts = async(filterCategory) => {
    const url = filterCategory ? `/allProducts?category=${filterCategory}` : '/allProducts';
    const {data} = await axiosPublic.get(url);
    return data;
}