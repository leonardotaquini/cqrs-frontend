import axios from "axios";
import { IProduct } from "../interfaces/product.interface";

const api_url = import.meta.env.VITE_API_URL;

const apiProducts = axios.create({
  baseURL: api_url,
  headers: {
    "Content-type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const response = await apiProducts.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const response = await apiProducts.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (product: IProduct) => {
  try {
    const response = await apiProducts.post("/", product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id: string, product: IProduct) => {
  try {
    const response = await apiProducts.put(`/${id}`, product);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await apiProducts.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
