// import { createContext, useContext, ReactNode, useState } from "react";

// type ShoppingProviderProps = {
//     children : ReactNode //tipo que da as childrens props dentro do react
// }

// type ShoppingCartContext = {
//     //preciso criar algo para adixionar itens ao carrinho, poder incrementar/descrementar/remover esses itens, então é preciso diferentes funções a ela
//     getItemQuantity: (id: number) => number
//     increaseCartQuantity: (id: number) => void //retorna qualquer coisa, não tem a função adicionar ao carrinho pois essa função de increase vai fazer exatamente a mesma coisa
//     decreaseCartQuantity: (id: number) => void
//     removeFromCart: (id: number) => void
//     //agora tenho 4 funções e todas elas tem todas as implementações necessárias
// }

// type CartItem = {
//     id: number //com o id eu tenho acesso a todas as informações do produto, como nome e preço
//     quantity: number //com ele eu posso calcular qual vai ser o preço total, usando o preço multiplicado pelo quantity
//     //é aqui que contém as informações do carrinho
// }

// const ShoppingCartContext = createContext({} as ShoppingCartContext);

// export function useShoppingCart() {
//     return useContext(ShoppingCartContext)
// };

// export function ShoppingCartProvider({ children }: ShoppingProviderProps) {
//     //toda vez que usar o provider ele vai precisar de objetos e childrens dentro dele
//     const [cartItems, setCartItems] = useState<CartItem[]>([])

//     function getItemQuantity(id: number) {
//         return cartItems.find(item => item.id === id)?.quantity || 0
//         //estou falando para achar o item com o correspondente id, e se tiver esse valor (essa frase representada pelo ?) eu quero retornar a quantidade ou retornar um id com valor de 0 (se não tiver nada)
//     }

//     function increaseCartQuantity(id: number) {
//         setCartItems(currItems => {
//             if (currItems.find(item => item.id === id) == null) {
//                 //se eu achar um item dentro do carrinho e se não tiver quero adicioanr 
//                 return [...currItems, { id, quantity: 1 }]
//             } else {
//                 return currItems.map(item => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity + 1 }
//                         //se achar o item pega o current item e incrementa a quantidade com 1, se não retorna o item sem alterações
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     function decreaseCartQuantity(id: number) {
//         setCartItems(currItems => {
//             if (currItems.find(item => item.id === id)?.quantity === 1) {
//                 //verificando se a quantidade é igual a 1 
//                 return currItems.filter(item => item.id !== id)
//             } else {
//                 return currItems.map(item => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity - 1 }
//                     } else {
//                         return item
//                     }
//                 })
//             }
//         })
//     }

//     function removeFromCart(id: number) {
//         setCartItems(currItems => {
//             return currItems.filter(item => item.id !== id)
//         })
//     }

//     return (
//         <ShoppingCartContext.Provider value={{ 
//             getItemQuantity, 
//             increaseCartQuantity, 
//             decreaseCartQuantity,
//             removeFromCart
//         }}>{children}</ShoppingCartContext.Provider>
//     )
// }
// //é essa a função que vai ser responsável por fazer o carrinho
// //depois vou colocar dentro do App, englobando todo o contexto dentro dele

// Arquivo do contexto
import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingProviderProps = {
    children: ReactNode; // Tipo que dá as props children dentro do React
};

type ShoppingCartContext = {
    getItemQuantity: (id: string) => number;
    increaseCartQuantity: (id: string) => void;
    decreaseCartQuantity: (id: string) => void;
    removeFromCart: (id: string) => void;
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

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseCartQuantity(id: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
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
            value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
