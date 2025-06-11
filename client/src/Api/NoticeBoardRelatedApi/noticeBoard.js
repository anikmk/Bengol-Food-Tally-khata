import axiosPublic from "../../hooks/useAxiosPublic"

export const noticeBoard = async()=>{
    const {data} = await axiosPublic.get('/noticeBoard');
    return data;
}