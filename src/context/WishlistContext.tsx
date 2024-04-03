import React, { createContext, useContext, useState } from 'react';

// Interface que descreve a forma dos dados no contexto da lista de desejos
interface WishlistContextType {
    wishlist: string[]; // matriz de IDs de produtos que foram marcados como desejados pelo usuário durante a interação com a aplicação.
    addToWishlist: (productId: string) => void; // Função para adicionar um produto à lista de desejos
    removeFromWishlist: (productId: string) => void; // Função para remover um produto da lista de desejos
}

// Criação do contexto da lista de desejos
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Hook personalizado para acessar o contexto da lista de desejos
export const useWishlist = () => {
    // acessar o contexto da lista de desejos
    const context = useContext(WishlistContext);
    if (!context) {
        //Verifica se o contexto é undefined ou null. Se o contexto não estiver definido, isso significa que o componente que está utilizando o hook useWishlist não está dentro de um WishlistProvider, onde o contexto é fornecido. Nesse caso, lançamos um erro informando ao desenvolvedor que o useWishlist deve ser usado dentro de um WishlistProvider.
        throw new Error('useWishlist must be used within a WishlistProvider');
        //ele é necessário para garantir a presença do context (Se o componente que está utilizando o hook useWishlist não estiver envolvido por um WishlistProvider, o contexto não estará disponível para esse componente) e evita erros silenciosos
    }
    return context;
    //retornamos o valor do contexto. Esse valor inclui a lista de desejos (wishlist) e as funções para adicionar e remover itens da lista de desejos (addToWishlist e removeFromWishlist).
};

// Provedor da lista de desejos
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Estado local para armazenar a lista de desejos
    const [wishlist, setWishlist] = useState<string[]>([]);

    // Função para adicionar um produto à lista de desejos
    const addToWishlist = (productId: string) => {
        if (!wishlist.includes(productId)) {
            setWishlist([...wishlist, productId]);
        }
    };

    // Função para remover um produto da lista de desejos
    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((id) => id !== productId));
    };

    // Retorna o provedor do contexto da lista de desejos com o valor configurado
    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children} {/* Componentes filhos são renderizados dentro do provedor */}
        </WishlistContext.Provider>
    );
};
