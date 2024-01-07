import axios from "axios";

const baseConfig = { // AxiosRequestConfig
  baseURL: import.meta.env.VITE_BASE_URL,  // insert in '.env' this key value pair ==> VITE_BASE_URL = https://api.coindesk.com/v1/
  headers: {
    "Content-type": "application/json",
  },
}
const http = axios.create(baseConfig) // AxiosInstance

http.interceptors.request.use((config) => {
  // Do something before request is sent
  // EXAMPLE
  // const token = window.localStorage.getItem("token");
  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }
  return config;
}, 
(error) => {
  // Do something with request error
  return Promise.reject(error);
})

http.interceptors.response.use((response) => { // AxiosResponse
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('response from http.ts', response)
  return response;
}, 
(error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  // EXAMPLE
  // if (error.response) {
  //   if (error.response.status == 400) console.log('400')
  //   // ...
  // }
  return Promise.reject(error);
});

export default http