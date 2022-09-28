
import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList, clear, quantity, total, removeItem } = useContext(CartContext);
    const deleteFromCart = (id) => { removeItem(id) }
    if (quantity === 0) {
        return <>
            <div>
                <div className='carritoVacio'>
                    <p>Tu carrito está vacío, llenalo en la <Link to="/" className='links'>
                        <span className='linkCartEmpty'> Tienda </span>
                    </Link></p>
                    <img src="./img/halloweenImg.svg" alt="imagen promocional" />
                </div>
            </div>
        </>
    }
    else
        return (
            <>
                <div className='containerCart'>
                    <h2>CARRITO</h2>
                    <div className='cartShop'>
                        <table>
                            <thead>
                                <tr>
                                    <th>PRODUCTO</th>
                                    <th>PRECIO</th>
                                    <th>CANTIDAD</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                                <p class="lineDetail"></p>
                            </thead>
                            <tbody>{cartList.map(item =>
                                <tr key={item.id}>
                                    <td><button
                                        onClick={() => deleteFromCart(item)}>X</button>
                                        {item.title}</td>
                                    <td>${item.price}</td>
                                    <td>{item.qty}</td>
                                    <td>${item.price * item.qty}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    
                    <div className='finalyShop'>
                        <h3>TOTAL DEL CARRITO</h3>
                        <section>
                        <p>Total:</p>
                        <p>${total}</p>
                        </section>
                        <button>Finalizar Compra</button>
                    </div>
                    </div>
                </div>
                <div className='cartBotones'>
                <Link to="/" className='links'>
                    <button className='boton'> ← Seguir comprando	 </button>
                </Link>
                <button onClick={clear} className='boton'> Vaciar todo el carrito </button>
                </div>
            </>
        );
}

export default Cart;