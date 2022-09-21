import React from "react";
import { Link } from 'react-router-dom';

const Item = ( {Products} ) =>{
    return(
                <div className="card">
                    <Link className="links" to={`/item/${Products.id}`}>
                    <img src={Products.picture} alt="imagen"/>
                    <p>{Products.title}</p>
                    <p>${Products.price}</p>
                    <button>MÁS DETALLES</button></Link>
                </div>
    )
}

export default Item;