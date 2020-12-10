import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-e63b7.firebaseio.com/"
});

export default instance;
