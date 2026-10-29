import axios from "axios";
import { API_BASE_URL } from "../utils/axiosInstance";

export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, {
            username,
            email,
            password,
        });

        return response.data;
    } catch (error) {
        console.error("Sign up failed:", error);
        if (error.code === 'ERR_NETWORK') {
            return error.data;
        }
        throw error;
    }
};