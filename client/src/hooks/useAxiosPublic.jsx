import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://server-azure-three.vercel.app'
});

export default axiosPublic;