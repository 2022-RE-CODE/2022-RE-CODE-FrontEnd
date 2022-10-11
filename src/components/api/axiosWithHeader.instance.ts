import axios from 'axios';

export const instanceWithHeader = axios.create({
    baseURL: "http://localhost:8090/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
});