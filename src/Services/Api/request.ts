import axios from "axios";
import env from "react-dotenv";

const request = axios.create({
  baseURL: env.API_URL,
  timeout: 5000,
});

export default request;
