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
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkdWR0ajkzMjZAZXdoYWluLm5ldCIsImlhdCI6MTcyMjM5MjQ4MCwiZXhwIjoxNzIyNDc4ODgwfQ.leB7W8UR7QHDQryQ-FZKpg9McWMpOk9VwU9ZDh1bs0E";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    return null;
  }

  return config;
});

export default client;
