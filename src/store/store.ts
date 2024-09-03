// src/store/store.js
import create from 'zustand';

interface ProductType {
  id: number;
  title: string;
  price: number;
  images: string[];
  discountPercentage?: number;
}

interface StoreState {
  cart: ProductType[];
  favorites: ProductType[];
  addToCart: (product: ProductType) => void;
  addToFavorites: (product: ProductType) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  addToFavorites: (product) =>
    set((state) => ({ favorites: [...state.favorites, product] })),
}));
