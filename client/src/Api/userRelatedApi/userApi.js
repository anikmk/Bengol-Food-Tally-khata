
import axiosPublic from "../../hooks/useAxiosPublic"

export const postUser = async(userData) => {
    const {data} = await axiosPublic.post('/users',userData);
    return data;
}
export const getSingleUser = async (email) => {
    const {data} = await axiosPublic.get(`/singleUser/${email}`);
    return data;
}

export const allUsers = async () => {
    const {data} = await axiosPublic.get('/allUsers');
    return data
}

export const deleteUser = async (id) => {
    const {data} = await axiosPublic.delete(`/deleteUser/${id}`);
    return data;
}

export const UpdateUserStatus = async(id,role) => {
    const {data} = await axiosPublic.put(`/updateUser/?id=${id}&role=${role}`);
    return data;
}
