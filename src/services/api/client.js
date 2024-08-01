import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

const token = localStorage.getItem("songpinToken");

if (token) {
  client.defaults.headers.common["Authorization"] = token;
}

export default client;
