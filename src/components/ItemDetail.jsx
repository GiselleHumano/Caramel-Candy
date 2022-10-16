import React from 'react';
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartContext } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail({ Products }) {
    const [itemCount, setItemCount] = useState(0);
    const { addItem } = useContext(CartContext);

    const notify = (qty) => {
        toast(`👻 Se agrego ${qty} productos al carrito`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }

    const onAdd = (qty) => {
        notify(qty)
        setItemCount(qty)
        addItem(Products, qty)
    }

    return (
        <>
            <div className='detailContainer'>
                <div className='cardDetail'>
                    <figure>
                        <img src={Products.picture} alt="imagen" />
                    </figure>
                </div>
                <div>
                    <h2>{Products.title}</h2>
                    <p className='priceDetail'>${Products.price}</p>
                    <div className='descriptionProducts'>
                    <p>{Products.description}</p>
                    </div>
                    <p className='stockDisponible'>Stock disponible: {Products.stock}</p>

                    {
                        itemCount === 0
                            ? <ItemCount stock={Products.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link className='links' to="/cart">
                                <button className="botonRevisarCard">
                                    <RiShoppingCart2Fill className='cartAddIcon' />
                                    Revisar el carrito
                                </button>
                            </Link>
                    }

                </div>
                <div className='addInfo'>
                    <hr></hr>
                    <h3>INFORMACIÓN ADICIONAL</h3>
                    <p> <span>Peso:</span>  {Products.weight} </p>
                    <p> <span>Dimensiones:</span>  {Products.dimension} </p>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default ItemDetail;