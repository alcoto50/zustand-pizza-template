import { create } from 'zustand';
import useStore from "./store";
import axios from 'axios';

const userStore = create((set) => ({
    cart: [],
    total: 0,
    customer: { name: '', address: '', phone: '' },
    fetchcart: async () => {
        try {
            const response = await axios.get(
                'http://localhost:3001/cart');
            
            const cart = response.data;
            console.log('cart', response.data);
            set({ cart: response.data });
        }
        catch (error) {
            console.error(error);
        }
    }
}))

    addToCart: (pizza) =>
        set((state) => {
            const updatedCart = [...state.cart, pizza];
            const updatedTotal = state.total + pizza.price;
            return { cart: updatedCart, total: updatedTotal };
        }),

    updateCustomer: (field, value) =>
        set((state) => ({
            customer: { ...state.customer, [field]: value },
        })),

    clearCart: () => set({ cart: [], total: 0 }),
}));

export default userStore;

