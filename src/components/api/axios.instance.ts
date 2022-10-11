import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:8090/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
});