"use client";

import React, { createContext, useContext, useState } from "react";

type Order = {
    name: string;
    base: string;
    milk: string;
    flavors: string[];
    extras: string[];
    shots: number;
    total: number;
};

type CartContextType = {
    cartOrders: Order[];
    addToCart: (order: Order) => void;
    showCart: boolean;
    toggleCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartOrders, setCartOrders] = useState<Order[]>([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (order: Order) => {
        setCartOrders((prev) => [...prev, order]);
    };

    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    return (
        <CartContext.Provider
            value={{ cartOrders, addToCart, showCart, toggleCart }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
}