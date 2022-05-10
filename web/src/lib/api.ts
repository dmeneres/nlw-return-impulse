import axios from "axios";

console.log(`É ISSO: ${import.meta.env.VITE_API_URL}`)

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})