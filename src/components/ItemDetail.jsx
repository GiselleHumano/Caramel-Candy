import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { RiShoppingCart2Fill} from "react-icons/ri";

function  ItemDetail ({ Products }) { 
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cantidad) => {
        setItemCount(cantidad)
    }

    return (
        <>
        <div className='detailContainer'>
                <div>
                <img src={Products.picture} alt="imagen"/>
                </div>
                <div>
                <h2>{Products.title}</h2>
                <p className='priceDetail'>${Products.price}</p>
                <p>{Products.description}</p>
                <p className='stockDisponible'>Stock disponible: {Products.stock}</p>
                
                {
                        itemCount === 0
                            ? <ItemCount stock={Products.stock} initial={itemCount} onAdd={onAdd} />
                            : <Link  className='links' to="/cart">
                                <button className="botonRevisarCard">
                                    <RiShoppingCart2Fill className='cartAddIcon'/> Revisar el carrito
                                </button>
                            </Link>
                    }
                    
                </div>
                <div className='addInfo'>
                <p className='lineDetail'></p>
                <h3>INFORMACIÓN ADICIONAL</h3>
                <p> <span>Peso:</span>  {Products.weight} </p>
                <p> <span>Dimensiones:</span>  {Products.dimension} </p>
                <hr></hr>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;