import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true,
});

client.interceptors.response.use(
    response => {
    return response;
    },
    error => {
        return error.response;
    },
);

client.interceptors.request.use(async config => {
    try {
        const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnQGciLCJpYXQiOjE3MjIzMTgwNTUsImV4cCI6MTcyMjQwNDQ1NX0.XDNc17ETurSUJ55jJ_ZpV7EcqjkxC2hI4X58TsQRKEY";

        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (e) {
        return null;
    }

    return config;
});

export default client;
