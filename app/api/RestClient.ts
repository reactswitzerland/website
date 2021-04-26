import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    };
  }

  return {};
};

const get = <T>(path: string): Promise<AxiosResponse<T>> =>
  axios.get(path, getHttpHeaders());

const del = <T>(path: string): Promise<AxiosResponse<T>> =>
  axios.delete(path, getHttpHeaders());

const post = <T>(path: string, data: any): Promise<AxiosResponse<T>> =>
  axios.post(path, data, getHttpHeaders());

const put = <T>(path: string, data: any): Promise<AxiosResponse<T>> =>
  axios.post(path, data, getHttpHeaders());

const patch = <T>(path: string, data: any): Promise<AxiosResponse<T>> =>
  axios.post(path, data, getHttpHeaders());

export default {
  get,
  del,
  post,
  put,
  patch,
};
