import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ Products }) => {

    const { id, title, price, picture, stock } = Products;

    return ( 
        <>
        <div className="card">
            <Link className="links" to={`/item/${id}`}>
                <div style={{cursor: stock === 0 ? "default" : ""}}>
                    {stock === 0 ? <div id="ItemSinStock"><p>SIN STOCK</p> 
                    </div> : ''}
                    <img src={picture} alt="imagen" />
                    <p>{title}</p>
                    <p>${price}</p>
                    {stock === 0 ? '' : <button> MÁS DETALLES</button>}
                </div></Link>
        </div>
        </>
    )
}

export default Item;