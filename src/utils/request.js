/**
 * 封装处理请求接口
 */
import axios from "axios";
axios.defaults.withCredentials = true;
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) return response;
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const parseJson = response => {
  return typeof response === "string" ? JSON.parse(response) : response;
}


export default function request(options) {
  if (options && !options.url) new Error('The url must be configured');
  const defaultOptions = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json;charset=UTF-8',
    }
  }
  return axios({ ...defaultOptions, ...options })
    .then(checkStatus)
    .then(parseJson)
    .then(data => (data))
    .catch(err => (err));
}