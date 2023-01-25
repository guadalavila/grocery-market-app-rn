import React from 'react';
import { createContext, useState } from 'react';
import { Product } from '../models/Product';

export const CartContext = createContext<{
    cart: Product[];
    deleteCart: React.Dispatch<void>;
    addProductToCart: React.Dispatch<Product>;
}>({
    cart: [],
    deleteCart: () => {},
    addProductToCart: () => {},
});

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<Product[]>([]);

    function deleteCart() {
        setCart([]);
    }

    function addProductToCart(product: Product) {
        setCart([...cart, product]);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                deleteCart,
                addProductToCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};
