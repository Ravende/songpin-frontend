import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

const token = localStorage.getItem("accessToken");

if (token) {
  client.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
}

export default client;
