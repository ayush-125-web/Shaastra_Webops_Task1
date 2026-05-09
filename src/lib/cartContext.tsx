import { createContext, useContext, useState } from "react";
import type { productType } from "./data";
import cartItems from "./cartItems";

type CartItem = productType & { quantity: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: productType) => void;
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState(cartItems);

  const addToCart = (product: productType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}