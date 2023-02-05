import React from 'react';
import { createContext, useState } from 'react';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

export const CartContext = createContext<{
    cart: CartItem[];
    deleteCart: React.Dispatch<void>;
    addProductToCart: React.Dispatch<CartItem>;
    removeProduct: React.Dispatch<Product>;
    total: number;
}>({
    cart: [],
    deleteCart: () => {},
    addProductToCart: () => {},
    removeProduct: () => {},
    total: 0,
});

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);

    function deleteCart() {
        setTotal(0);
        setCart([]);
    }

    function addProductToCart(item: CartItem) {
        const productExist = cart.find((x) => x.product.id === item.product.id);
        setTotal(total + item.product.price);
        if (productExist) {
            cart.map((x) => {
                if (x.product.id === item.product.id) x.quantity++;
                return x;
            });
        } else {
            setCart([...cart, item]);
        }
    }

    function removeProduct({ id, price }: Product) {
        const product = cart.find((x) => x.product.id === id)!!;
        setTotal(total - price);
        if (product.quantity > 1) {
            cart.map((x) => {
                if (x.product.id === id) x.quantity--;
                return x;
            });
            setCart([...cart]);
        } else {
            const cart_ = cart.filter((x) => x.product.id !== id);
            setCart([...cart_]);
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                deleteCart,
                addProductToCart,
                removeProduct,
                total,
            }}>
            {children}
        </CartContext.Provider>
    );
};
