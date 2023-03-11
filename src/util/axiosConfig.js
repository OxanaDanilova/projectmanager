import axios from 'axios';

const axiosInstance = axios.create({
 // baseURL: 'https://rss-app-project-manager.onrender.com',
 baseURL: 'https://rss-pmapp-be-production.up.railway.app',
});

export default axiosInstance;
