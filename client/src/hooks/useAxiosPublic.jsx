import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://bengol-food.vercel.app'
});

export default axiosPublic;