import axios from "axios";

const apiServer = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your API URL
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiServer;
