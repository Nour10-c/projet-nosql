import axios from "axios";


const API_URL = "https://projet-nosql-1.onrender.com/api";


export const api = axios.create({
baseURL: API_URL,
});