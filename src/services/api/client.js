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
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkdWR0ajkzMjZAZXdoYWluLm5ldCIsImlhdCI6MTcyMjQ2ODMzNiwiZXhwIjoxNzIyNTU0NzM2fQ.GXnRC7jYp-_Xp81NgyG01T-WfswAANjV95dMNAHcQjY";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    return null;
  }

  return config;
});

export default client;
