import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
const BASE_URL = 'https://localhost/api';
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

      if (config.url && config.url.indexOf('undefined') !== -1) {
        return Promise.reject('Canceling nearby nearby offers fetching on manin page');
      }
      return config;
    },
  );
  return api;
};

export default createAPI;
