import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('@CART')));

    function insertInToCart(product, quantity) {
        if (!product.quantity) {
          product.quantity = quantity;
        }
        let arrayProducts = [];
        const dataLocalStorage = localStorage.getItem('@CART');
        if(dataLocalStorage){
            const data = JSON.parse(dataLocalStorage);
            arrayProducts = [...data]
        }

        const productIndex = arrayProducts.findIndex(element => element.id === product.id);
        if (productIndex !== -1) {
          arrayProducts[productIndex] = {
            ...arrayProducts[productIndex],
            quantity: arrayProducts[productIndex].quantity + quantity,
          }
        } else {
          arrayProducts.push(product);
        }

        localStorage.setItem('@CART', JSON.stringify(arrayProducts));

        setProducts(arrayProducts);
        console.log('CONTEXT', product[0])
    }

    function setProductQuantity(id, quantity) {
      const productIndex = products.findIndex(product => product.id === id);
      let auxArray = [...products];
      if (quantity === 0) {
        auxArray.splice(productIndex, 1);
      } else {
        auxArray[productIndex].quantity = quantity;
      }
      setProducts(auxArray);
      localStorage.setItem('@CART', JSON.stringify(auxArray));
    } 

    return(
        <CartContext.Provider value={{ insertInToCart, cart: "Carrinho", products, setProductQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    const context = useContext(CartContext);
    
    return context;
}

export default CartContext;