import axios from "axios";


export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: "application/json",
    "Content-Type": "application/json", 
  },
});