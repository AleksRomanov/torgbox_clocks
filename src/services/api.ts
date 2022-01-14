import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL = '/';
// const BASE_URL = 'https://drive.google.com/file/';
const API_TIMEOUT = 5000;

const createAPI = (): BaseQueryFn => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: API_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (err: AxiosError) => ({error: {status: err.response?.status, data: err.response?.data}}),
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      // if (config.headers) {
      // // config.headers['x-token'] = token;
      //
      // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000/';
      // config.headers['Access-Control-Allow-Credentials'] = 'true';
      // //   config.headers.append('Access-Control-Allow-Credentials', 'true');
      // }

      return config;
    });
  return api;
};

export default createAPI;
