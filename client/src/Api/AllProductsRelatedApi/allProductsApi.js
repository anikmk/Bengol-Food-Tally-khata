import axiosPublic from "../../hooks/useAxiosPublic"

export const getAllProducts = async(filterCategory) => {
    const url = filterCategory ? `/allProducts?category=${filterCategory}` : '/allProducts';
    const {data} = await axiosPublic.get(url);
    return data;
}
export const insertAllProductsData =  async(orderInfo) => {
        const {data} = await axiosPublic.post(`/allProducts/createOrders`,orderInfo);
        return data;
}
export const getPornoOrderList = async() => {
    const {data} = await axiosPublic.get('/allProducts/allOrders');
    return data
}
export const deleteSinglePornoOrder = async(id)=> {
    const {data} = await axiosPublic.delete(`/snglePornoOrderDelete/${id}`);
    return data;
}

// create porno data
export const createPornoData = async(pornoData) => {
    const {data} = await axiosPublic.post("/createPornoData",pornoData);
    return data;
}
