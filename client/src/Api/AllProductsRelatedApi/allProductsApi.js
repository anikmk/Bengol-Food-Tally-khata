import axiosPublic from "../../hooks/useAxiosPublic"

export const getAllProducts = async() => {
    const {data} = await axiosPublic.get('/allProducts');
    return data;
}