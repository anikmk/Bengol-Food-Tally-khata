
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
}