import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingProviderProps = {
    children: ReactNode; 
};

type ShoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
    cartQuantity: number;
    cartItems: CartItem[];
};

type CartItem = {
    id: string; 
    quantity: number; 
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
        //estou falando para achar o item com o correspondente id, e se tiver esse valor (essa frase representada pelo ?) eu quero retornar a quantidade ou retornar um id com valor de 0 (se não tiver nada)
    }

    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                //se eu achar um item dentro do carrinho e se não tiver quero adicioanr
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                        //se achar o item pega o current item e incrementa a quantidade com 1, se não retorna o item sem alterações
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                //verificando se a quantidade é igual a 1
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(id: string) {
        setCartItems(currItems => currItems.filter(item => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}