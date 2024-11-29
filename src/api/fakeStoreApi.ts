import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
