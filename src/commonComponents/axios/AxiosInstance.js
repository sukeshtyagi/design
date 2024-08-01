import axios from "axios";
const instance = axios.create({
  baseURL: "http://webclickstudio.com:8012",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance
