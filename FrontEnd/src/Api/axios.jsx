import axios from "axios";

const axiosInstance = axios.create({
  // local host for firebase function
  // baseURL: "http://127.0.0.1:5001/clone-eaa8a/us-central1/api",

  // amazon backend deploy on render.com
  baseURL: "https://amazon-api-diploy.onrender.com/",
});

export default axiosInstance;

amazon-clone-frontend-heryu