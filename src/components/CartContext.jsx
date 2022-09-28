import { useState, createContext } from "react";

export const CartContext = createContext ()

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);

    function addItem (products, qty)  {
        if (isInCart(products.id)) { 
            const index = cartList.findIndex( item => item.id === products.id)
            cartList[index].qty += qty
            setCartList([...cartList])
        } else {
            setCartList([...cartList, {...products, qty: qty}])
        }
    }

    const clear = () => {
        setCartList([])
    }
    const isInCart = (id) => { 
        return cartList.some(item => item.id === id)
    }

    const removeItem = (id) => { 
        const index = cartList.findIndex( item => item.id === id)
        cartList.splice(index, 1)
        setCartList([...cartList])
    }

    const totalProducts = (cartList) => {
        let result = 0;
        cartList.map(i => result += i.qty)
        return result
    }
    const total = (cartList) => {
        let totalPrice = 0;
        cartList.map ( (i) => totalPrice += i.price * i.qty )
        return totalPrice
    }

    return(
        <CartContext.Provider value ={{cartList, addItem, clear, quantity: totalProducts(cartList), total: total(cartList), removeItem }}>
            {children}
        </CartContext.Provider>
    );

}

export default CartContextProvider;