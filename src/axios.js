import axios from "axios";

const instance = axios.create({
    baseURL: "https://tender-backend-ivko.herokuapp.com",
});

export default instance;