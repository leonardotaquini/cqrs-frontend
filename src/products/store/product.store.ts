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
        set({ products: response.data });
    },
    getProduct: async (id: string) => {
        set({ isLoading: true });
        const product = await getProduct(id);
        set({ isLoading: false });
        return product;
    },
    createProduct: async (product: IProduct) => {
        set({ isLoading: true });
        const response = await createProduct(product);
        set({ isLoading: false, products: [...get().products, response] });
    },
    updateProduct: async (id: string, product: IProduct) => {
        set({ isLoading: true });
        const response = await updateProduct(id, product);
        set({ isLoading: false, products: get().products.map((p) => p.id === id ? response : p) });
    },
    deleteProduct: async (id: string) => {
        set({ isLoading: true });
        await deleteProduct(id);
        set({ isLoading: false, products: get().products.filter((p) => p.id !== id) });
    },
})

export const useProductStore = create<IProductStore>()(
    persist(productStore, { name:'product-store' })
);