"use client";

import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";

export function Cart() {
    const {
        cartOrders,
        increaseQuantity,
        decreaseQuantity,
        toggleCart,
        showCart,
    } = useCart();

    if (!showCart) return null;

    const totalPrice = cartOrders.reduce(
        (sum, item) => sum + item.total * item.quantity,
        0
    );

    return (
        <div className="fixed right-0 top-0 max-h-full w-80 bg-background border-l border-border p-6 shadow-lg z-50 overflow-y-auto">
            <h2 className="text-xl font-bold mb-6">Your Cart</h2>

            {cartOrders.length === 0 && (
                <p className="text-muted-foreground">Cart is empty</p>
            )}

            {cartOrders.map((order, index) => (
                <div key={index} className="mb-4 border-b pb-4">
                    <p className="font-semibold">{order.name}</p>

                    <div className="flex items-center gap-4 mt-3">
                        <button
                            onClick={() => decreaseQuantity(index)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-primary text-primary hover:bg-primary hover:text-background transition"
                        >
                            -
                        </button>

                        <span className="text-lg font-bold w-6 text-center">
                            {order.quantity}
                        </span>

                        <button
                            onClick={() => increaseQuantity(index)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-primary text-primary hover:bg-primary hover:text-background transition"
                        >
                            +
                        </button>
                    </div>


                    <p className="mt-2 text-sm text-muted-foreground">
                        ${(order.total * order.quantity).toFixed(2)}

                    </p>
                </div>
            ))}

            <div className="mt-6 border-t pt-4">
                <p className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </p>
            </div>

            <Button onClick={toggleCart} className="w-full mt-6">
                Close
            </Button>
        </div>
    );
}
