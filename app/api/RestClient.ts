import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SUPABASE_KEY;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

const get = <T>(path: string): Promise<AxiosResponse<T>> => axios.get(path);

const del = <T>(path: string): Promise<AxiosResponse<T>> => axios.delete(path);

const post = <T>(path: string, data: unknown): Promise<AxiosResponse<T>> =>
  axios.post(path, data);

const put = <T>(path: string, data: unknown): Promise<AxiosResponse<T>> =>
  axios.post(path, data);

const patch = <T>(path: string, data: unknown): Promise<AxiosResponse<T>> =>
  axios.post(path, data);

export default {
  get,
  del,
  post,
  put,
  patch,
};
