import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingProviderProps = {
    children: ReactNode; 
};

type ShoppingCartContext = {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    cartQuantity: number;
    cartItems: CartItem[];
};

type CartItem = {
    idCart: string; 
    quantity: number; 
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.idCart === id)?.quantity || 0;
    };

    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.idCart === id) == null) {
                return [...currItems, { idCart: id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.idCart === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            };
        });
    };

    function decreaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.idCart === id)?.quantity === 1) {
                return currItems.filter(item => item.idCart !== id);
            } else {
                return currItems.map(item => {
                    if (item.idCart === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            };
        });
    };

    function removeFromCart(id: string) {
        setCartItems(currItems => currItems.filter(item => item.idCart !== id));
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                cartQuantity
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};