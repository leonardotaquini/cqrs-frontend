import axios from "axios";
import { IProduct } from "../interfaces/product.interface";

const api_url = import.meta.env.VITE_API_URL;

const apiProducts = axios.create({
    baseURL: api_url,
    headers: {
        "Content-type": "application/json"
    }
});


export const getProducts = async () => {
    const response = await apiProducts.get('/');
    return response.data;
}

export const getProduct = async (id: string) => {
    const response = await apiProducts.get(`/${id}`);
    return response.data;
}

export const createProduct = async (product: IProduct) => {
    const response = await apiProducts.post('/', product);
    return response.data;
}

export const updateProduct = async (id: string, product: IProduct) => {
    const response = await apiProducts.put(`/${id}`, product);
    return response.data;
}

export const deleteProduct = async (id: string) => {
    const response = await apiProducts.delete(`/${id}`);
    return response.data;
}