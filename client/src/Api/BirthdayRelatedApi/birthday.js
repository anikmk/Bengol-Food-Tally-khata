import axiosPublic from "../../hooks/useAxiosPublic"

// get all birthday category
export const getAllBirthdayCategories = async()=>{
const {data} = await axiosPublic.get('/all/birthday/categories');
return data
}
export const getBirthdayCategoriesDetails = async(id)=>{
const {data} = await axiosPublic.get(`/all/birthday/categories/id=${id}`);
return data
}