import React from "react";

const Item = ( {Products} ) =>{
    return(
                <div className="card">
                    <img src={Products.picture} alt="imagen"/>
                    <p>{Products.title}</p>
                    <p>${Products.price}</p>
                    <button>Mas detalles</button>
                </div>
    )
}

export default Item;