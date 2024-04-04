import React, { createContext, useContext, useState } from 'react';

interface WishlistContextType {
    wishlist: string[]; 
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wishlist, setWishlist] = useState<string[]>([]);

    const addToWishlist = (productId: string) => {
        if (!wishlist.includes(productId)) {
            setWishlist([...wishlist, productId]);
        }
    };

    const removeFromWishlist = (productId: string) => {
        setWishlist(wishlist.filter((id) => id !== productId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children} 
        </WishlistContext.Provider>
    );
};
