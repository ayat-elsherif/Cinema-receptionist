import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.delete["Access-Control-Allow-methods"] = "*";
export const source = axios.CancelToken.source();

export default axios.create({
  baseURL: "http://cinema.ahmed-gamal.com/api/",
});
