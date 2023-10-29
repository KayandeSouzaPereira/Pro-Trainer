const API_URL = "https://pro-g-api-kayandesouzapereira.vercel.app/api/";
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL,
  });

let token = null;

export { API_URL, api, token }