import { create } from 'zustand';

const userStore = create((set) => ({
    cart: [],
    total: 0,
    customer: { name: '', address: '', phone: '' },

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

