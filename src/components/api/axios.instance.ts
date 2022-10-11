import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:8090/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.response.use(response => {
    if (!response.data.status) return response.data;
    if (response.data.status === 500) return response.data.message;
    if (response.data.status === 401) return response.data.message;
},
error => {
    return Promise.reject(error);
});

export default instance; 