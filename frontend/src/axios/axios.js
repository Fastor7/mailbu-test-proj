import axios from "axios";

const instance = axios.create({
  baseURL: "",
  headers: {
    Token: "",
  },
});

export default instance;
