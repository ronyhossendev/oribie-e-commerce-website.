import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCartStore = create(persist((set) => ({
  cartItems: [],

  
  addToCart: (product) =>
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.id === product.id
      );

      
      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }

      
      return {
        cartItems: [...state.cartItems, { ...product, qty: 1 }],
      };
    }),

  
  incrementQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      ),
    })),

  
  decrementQty: (id) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      ),
    })),

  
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.id !== id
      ),
    })),
})));

export default useCartStore;