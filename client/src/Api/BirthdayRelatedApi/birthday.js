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

// get all birthday order for dashboard
export const getBirthdayAllOrders = async() => {
    const {data} = await axiosPublic.get('/find/all/birthday/cake/orders');
    return data;
}

// delete order:
export const deleteBirthdayOrder = async(id) => {
    const {data} = await axiosPublic.delete(`/remove/birthday/order/${id}`);
    return data;
}

// insert new cake design:
export const addBirthdayCakeDesign = async(payload) => {
    const {data} = await axiosPublic.put('/addBirthday/cake/design',payload);
    return data;
}