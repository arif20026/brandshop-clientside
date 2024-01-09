import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (productDetails) => {
        setCart([...cart, productDetails]);
    };

    const handleRemoveFromCart = (productId) => {
        // Remove the item from the cart based on the productId
        setCart(cart.filter((item) => item._id !== productId));
      };

    return (
        <CartContext.Provider value={{ cart, handleAddToCart ,handleRemoveFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
