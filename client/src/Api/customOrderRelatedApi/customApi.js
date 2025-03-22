import axiosPublic from "../../hooks/useAxiosPublic"

export const createCurrentPerKgProductPrice = async(customPrice) => {
    const {data} = await axiosPublic.post('/customPrice',customPrice);
    return data;
}