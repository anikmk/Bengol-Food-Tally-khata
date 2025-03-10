import axiosPublic from "../../hooks/useAxiosPublic"

export const createFastFood = async(fastFoodData) => {
    const {data} = await axiosPublic.post('/fastFoods',fastFoodData);
    return data;
}

export const getAllFastFood = async() => {
    const {data} = await axiosPublic.get('/allfastFood');
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

export const submitFastFoodOrder = async(customerOrderData) => {
    const {data} = await axiosPublic.post("/customerOrder",customerOrderData);
    return data;
}

export const getCustomersAllOrders = async() => {
    const {data} = await axiosPublic.get('/customer/allOrders');
    return data;
}

export const deleteCustomerOrder = async (id) => {
    const {data} = await axiosPublic.delete(`/deleteCustomerOrder/${id}`);
    return data;
}
export const getShopingCartProduct = async (email) => {
    const {data} = await axiosPublic.get(`/singleShopingCartProduct/${email}`);
    return data;
}
