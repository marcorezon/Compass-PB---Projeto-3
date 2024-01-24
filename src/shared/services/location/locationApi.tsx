import axios from "axios";
export const locationData = axios.create({
  baseURL: "http://localhost:3000",
});