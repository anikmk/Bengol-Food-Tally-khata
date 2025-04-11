import axiosPublic from "../../hooks/useAxiosPublic"

// get all birthday category
export const getAllBirthdayCategories = async(searchParams = {})=>{
    const query = new URLSearchParams(searchParams).toString();
    const {data} = await axiosPublic.get(`/all/birthday/categories?${query}`);
    return data
}

export const getBirthdayCategoriesDetails = async(id)=>{
const {data} = await axiosPublic.get(`/all/birthday/categories/${id}`);
return data
}

export const submitBirthdayCakeOrderInfo = async(cakeOrderInfo) => {
    const {data} = await axiosPublic.post("/create/birthday/order/info",cakeOrderInfo);
    return data
}