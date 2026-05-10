import { createContext, useContext, useState } from "react";
import type { productType } from "./data";
import cartItems from "./cartItems";
import products from "./data";

type CartItem = productType & { quantity: number };

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: productType,quanity:number) => void;
  removeItem:(product:productType)=>void;
  updateItem:(product:productType,quantity:number) =>void;
} | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState(cartItems);

  const addToCart = (product: productType,quanity:number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quanity }
            : item
        );
      }
      return [...prev, { ...product, quantity: quanity }];
    });
  };

  const removeItem=(product:productType)=>{
    setCart((prev)=>{
        return prev.filter((item)=> item.id!=product.id)
           
    });
  };

  const updateItem=(product:productType,quantity:number)=>{
    setCart((prev)=>{
        return prev.map((item)=>item.id==product.id ? {...item,quantity:quantity}:item)
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeItem,updateItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}