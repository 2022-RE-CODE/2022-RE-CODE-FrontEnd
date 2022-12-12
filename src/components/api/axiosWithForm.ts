import axios from 'axios';

type responseType = {
    status: number,
    data: JSON | string
} | undefined

const instanceWithForm = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACK_BASE_URL}/`,
    headers: { 
        "Authorization": "bearer " + localStorage.getItem("ACCESS_TOKEN") ?? null
    }
});

instanceWithForm.interceptors.response.use((response): responseType => {
    if (response === undefined) return {
        status: 400,
        data: "Axios 통신 에러"
    };
    if (!response.data.status) return {
        status: 200,
        data: response.data
    };
    if (response.data.status === 500) return {
        status: 500,
        data: response.data.message
    };
},
    error => {
        return Promise.reject(error);
    });

export default instanceWithForm; 