import axios from "axios";

export const source = axios.CancelToken.source();

export default axios.create({
  baseURL: "http://cinema.ahmed-gamal.com/api/",
});
