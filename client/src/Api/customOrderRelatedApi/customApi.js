
import axiosPublic from "../../hooks/useAxiosPublic"

export const getCustomPerKgProductPrice = async() => {
    const {data} = await axiosPublic.get('/customPerKgPrice');
    return data;
}
export const getCustomPerPichProductPrice = async() => {
    const {data} = await axiosPublic.get('/customPerPichPrice');
    return data;
}

export const updatePerKgPrices = async(updatedFields)=>{
    const {data} = await axiosPublic.patch("/updateCustomPerKgPrice",updatedFields);
    return data;
}
export const updatePerPichPrices = async(updatedFields)=>{
    const {data} = await axiosPublic.patch("/updateCustomPerPichPrice",updatedFields);
    return data;
}

// with package create handler:
export const createCustomWithPackageOrder = async(customerOrderDataWithPackage) => {
    const { data } = await axiosPublic.post('/user/create/order/withPackage',customerOrderDataWithPackage);
    return data;
}
// with out package create handler:
export const createCustomWithOutPackageOrder = async(customerOrderDataWithOutPackage) => {
    const {data} = await axiosPublic.post('/user/create/order/withOutPackage',customerOrderDataWithOutPackage);
    return data;
}

// get with package orders data:
export const getWithPackageOrdersData = async()=>{
    const {data} = await axiosPublic.get('/with/package/all/orders');
    return data;
}

// get with out package orders data:
export const getWithOutPackageOrdersData = async()=>{
    const {data} = await axiosPublic.get('/with/out/package/all/orders');
    return data;
}

// delete with package order:
export const deleteWithPackageOrder = async(id) => {
    const {data} = await axiosPublic.delete(`delete/with/package/order/${id}`);
    return data;
}
export const deleteWithOutPackageOrder = async(id) => {
    const {data} = await axiosPublic.delete(`delete/with/out/package/order/${id}`);
    return data;
}