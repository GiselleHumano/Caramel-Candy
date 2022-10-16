
import React from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";
import { doc, setDoc, serverTimestamp, collection, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig.js';
import Swal from 'sweetalert2';

const Cart = () => {

    const createOrder = async (e) => {
        e.preventDefault();
        let itemsForDB = cartList.map(item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            quantity: item.qty,
        }))
        let order = {
            buyer: {
                name: "nombre apellido",
                email: "apellido.nombre@gmail.com",
                telefono: "12345678"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: total
        }
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);

        cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.qty)
            });
        })
        clear();
        Swal.fire({
            title: 'COMPRA REALIZADA',
            text: 'Su compra fue realizada con exito, id de la compra: ' + newOrderRef.id,
            icon: 'success',
            confirmButtonText: 'Continuar'
        })
    }

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
                    <h2>🎃 CARRITO 🎃</h2>
                    <div className='cartShop'>
                        <table>
                            <thead>
                                <tr>
                                    <th>PRODUCTO</th>
                                    <th></th>
                                    <th>PRECIO</th>
                                    <th>CANTIDAD</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>{cartList.map(item =>
                                <tr key={item.id}>
                                    <td className='buttonCleanCartPorduct'>
                                        <img className='iconCleanCartPorduct'
                                            onClick={() => deleteFromCart(item.id)}
                                            src="https://img.icons8.com/fluency-systems-regular/48/5300a1/xbox-x.png"
                                            alt='icon x' />
                                        <div className='imgCart'>
                                            <img className='imgproduct' src={item.picture} alt="" />
                                        </div>
                                    </td>
                                    <td>{item.title}</td>
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
                            <button onClick={(e) => createOrder(e)}>Finalizar Compra</button>
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
