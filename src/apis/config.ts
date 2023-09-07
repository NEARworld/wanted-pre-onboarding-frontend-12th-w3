import axios from 'axios';

const axiosInstance = axios.create({ baseURL: ' http://localhost:4000/sick' });

export const getWords = async () => {
  return axiosInstance({
    method: 'GET',
  });
};
