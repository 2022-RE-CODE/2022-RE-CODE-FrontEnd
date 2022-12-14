import axios from 'axios';

type responseType = {
    status: number,
    data: JSON | string
} | undefined

export const instance = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACK_BASE_URL}/`,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.response.use((response): responseType => {
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
    if (response.data.status === 400) return {
        status: 400,
        data: response.data.message
    };
    if (response.data.status === 401) return {
        status: 401,
        data: response.data.message
    };
},
    error => {
        if (error.response.status === 400 && error.response.data.password !== undefined) return {
            status: 400,
            data: error.response.data.password
        };
        if (error.response.data.status === 400) return {
            status: 400,
            data: error.response.data.message
        };
        if (error.response.data.status === 409) return {
            status: 409,
            data: error.response.data.message
        };
        if (error.response.data.status === 422) return {
            status: 422,
            data: error.response.data.message
        }
        if (error.response.data.status === 401) return {
            status: 401,
            data: error.response.data.message
        }
        if (error.response.data.status === 404) return {
            status: 404,
            data: error.response.data.message
        }
        return Promise.reject(error);
    });

export default instance; 