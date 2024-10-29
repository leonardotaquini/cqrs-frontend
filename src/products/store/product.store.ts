import { create, StateCreator } from 'zustand'
import { IProduct } from '../interfaces/product.interface'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../api/product.axios';
import { persist } from 'zustand/middleware';

interface IProductStore {
    products: IProduct[];
    isLoading: boolean;
    getProducts: () => Promise<void>;
    getProduct: (id: string) => Promise<IProduct>;
    createProduct: (product: IProduct) => Promise<void>;
    updateProduct: (id: string, product: IProduct) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    
}


const productStore: StateCreator<IProductStore> = (set, get) => ({
    products: [],
    isLoading: false,
    getProducts: async () => {
        set({ isLoading: true });
        const response = await getProducts();
        if (response?.status === 200){
            set({isLoading:false, products: response.data });
        }
        set({ isLoading: false });
    },
    getProduct: async (id: string) => {
        set({ isLoading: true });
        const response = await getProduct(id);
        if (response?.status === 200) return response.data;
        set({ isLoading: false });

    },
    createProduct: async (product: IProduct) => {
        set({ isLoading: true });
        const response = await createProduct(product);
        if (response?.status === 201){
            set({ isLoading: false, products: [...get().products, response.data.product] });
        }
        set({ isLoading: false });
    },
    updateProduct: async (id: string, product: IProduct) => {
        set({ isLoading: true });
        const response = await updateProduct(id, product);
        if (response?.status === 204){
            const newProduct = { ...product, _id: id };
            set({ isLoading: false, products: get().products.map((p) => p._id === id ? newProduct : p) });
        }
        set({ isLoading: false });
    },
    deleteProduct: async (id: string) => {
        set({ isLoading: true });
        const response = await deleteProduct(id);
        if (response?.status === 204){
            set({ isLoading: false, products: get().products.filter((p) => p._id !== id) });
        }
        set({ isLoading: false });
    },
})

export const useProductStore = create<IProductStore>()(
    persist(productStore, { name:'product-store' })
);