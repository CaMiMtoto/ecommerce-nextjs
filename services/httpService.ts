import axios,{AxiosError} from 'axios';

// Create an Axios instance with default configurations
const http = axios.create({
    baseURL: `http://localhost:4000/api`, // Your backend URL
    // withCredentials: true, // Important: Ensures cookies are sent with the request
    timeout: 10000, // Optional: Set timeout for requests
});

http.interceptors.request.use(
    (config) => {
        // You can handle additional request logic here, if necessary
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        // You can handle response transformations or global error handling
        return response.data;
    },
    (error) => {
        console.error('Error:', error);
        return Promise.reject(error);
    }
);

export {http, AxiosError}
