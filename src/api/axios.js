import axios from "axios";

const api = axios.create({
  baseURL: "https://cogip-990e44950882.herokuapp.com/users",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
