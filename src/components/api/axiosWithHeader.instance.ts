import axios from 'axios';

const instanceWithHeader = axios.create({
    baseURL: "http://localhost:8090/",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

instanceWithHeader.interceptors.response.use(response => {
    if (!response.data.status) return response.data;
    if (response.data.status === 500) return response.data.message;
},
error => {
    return Promise.reject(error);
});

export default instanceWithHeader; 