import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dine-ease-server.vercel.app",
  //   withCredentials: true,
});

export default axiosInstance;
