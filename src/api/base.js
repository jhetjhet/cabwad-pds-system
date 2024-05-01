import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
    const token = cookies.get('token');
    console.log(token)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        const resetToken = cookies.get('reset');

        if (resetToken) {
            try {
                const refreshResp = await axios.post(BASE_URL + '/auth/reset', {
                    token: resetToken,
                });

                if (refreshResp.status === 200) {
                    const newToken = refreshResp.data.token;

                    cookies.set('token', newToken);

                    originalRequest.headers.Authorization = `Bearer ${newToken}`;

                    return api(originalRequest);
                }
            } catch (error) {
                console.log('Error refreshing token:', error);
            }
        }
    }

    return Promise.reject(error);
});

export default api;