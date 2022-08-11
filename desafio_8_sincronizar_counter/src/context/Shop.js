import React, { useState } from 'react'
import { createContext } from 'react'

export const ShopData = createContext ();

const ShopProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [cart, setCart] = useState([]);
    const isInCart = (productId) => {
        const productoEncontrado = cart.find(producto =>producto.id === productId);
        if (productoEncontrado) return true
        return false
    }
    const addItem = (item, quantity) => {
        const qty = quantity;
        const flag = isInCart(item.id);
        if (flag) {
            const cartModificado = cart.map(product => 
                {
                    if (product.id === item.id) return {...product, quantity: product.quantity + qty}
                    else return product
                })
                setCart (cartModificado);
        }else {
            const itemToAdd = {
            ...item,
            quantity
        }
        const cartModificado = [...cart, itemToAdd];
        setCart(cartModificado);
        }
    }
    
  return (
    <ShopData.Provider value={{darkMode, setDarkMode, addItem}}>
        {children}
    </ShopData.Provider>
  )
}

export default ShopProvider;