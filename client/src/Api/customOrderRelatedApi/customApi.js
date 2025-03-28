
import axiosPublic from "../../hooks/useAxiosPublic"

// export const createCurrentPerKgProductPrice = async(customPrice) => {
//     const {data} = await axiosPublic.post('/customPrice',customPrice);
//     return data;
// };

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