import { STORAGE_KEY } from "@/configs/storage-key.config";
import type { AxiosInstance } from "axios";
import axios from "axios";

class Http {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: "/",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });

    this.instance.interceptors.request.use((config) => {
      // Temp fix
      const token = JSON.parse(
        sessionStorage.getItem(STORAGE_KEY.SESSION_PROFILE) || "{}",
      ).token;
      if (token) {
        // console.log('config token', token)
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (!error.response) {
          return Promise.reject({ message: "Lỗi máy chủ" });
        }
        const message = error.response.data;
        return Promise.reject({
          message: message,
        });
      },
    );
  }
}

const http = new Http().instance;
export default http;
