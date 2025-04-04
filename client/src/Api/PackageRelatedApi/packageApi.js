
import axiosPublic from "../../hooks/useAxiosPublic"

export const createPackage = async(packageData) => {
    const {data} = await axiosPublic.post("/createPackages",packageData);
    return data;
};

export const getAllPackages = async() => {
    const {data} = await axiosPublic.get("/packages");
    return data;
};

export const getMorePackages = async(id) => {
    const {data} = await axiosPublic.get(`/morePackages/${id}`);
    return data;
};

export const createMainPackageOrder = async(customerOrderDataMainPackage) => {
    const { data } = await axiosPublic.post('/customer/order/main/package',customerOrderDataMainPackage);
    return data;
};

export const getMainPackageAllOrders = async() => {
    const {data} = await axiosPublic.get('/main/package/all/customers/orders');
    return data;
    
}

export const deleteMainPackageOrder = async(id) => {
    const {data} = await axiosPublic.delete(`delete/main/package/order/${id}`);
    return data;
}