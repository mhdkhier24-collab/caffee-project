"use client";

import React, { createContext, useContext, useState } from "react";

export type Order = {
    id: string;
    name: string;
    base: string;
    milk: string;
    flavors: string[];
    extras: string[];
    shots: number;
    total: number;
    quantity: number;
};

type CartContextType = {
    cartOrders: Order[];
    addToCart: (order: Order) => void;
    increaseQuantity: (index: number) => void;
    decreaseQuantity: (index: number) => void;
    showCart: boolean;
    toggleCart: () => void;
};


const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartOrders, setCartOrders] = useState<Order[]>([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (order: Order) => {
        setCartOrders((prev) => {
            const existing = prev.find(
                (item) =>
                    item.name === order.name &&
                    item.base === order.base &&
                    item.milk === order.milk &&
                    JSON.stringify(item.flavors) === JSON.stringify(order.flavors) &&
                    JSON.stringify(item.extras) === JSON.stringify(order.extras) &&
                    item.shots === order.shots
            );


            if (existing) {
                return prev.map((item) =>
                    item.id === existing.id
                        ? { ...item, quantity: item.quantity + order.quantity }
                        : item
                );
            }

            return [
                ...prev,
                {
                    ...order,
                    id: crypto.randomUUID(),

                },
            ];
        });
    };

    const increaseQuantity = (index: number) => {
        setCartOrders((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (index: number) => {
        setCartOrders((prev) =>
            prev
                .map((item, i) =>
                    i === index
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    const toggleCart = () => {
        setShowCart((prev) => !prev);
    };

    return (
        <CartContext.Provider
            value={{ cartOrders, addToCart, increaseQuantity, decreaseQuantity, showCart, toggleCart }}
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