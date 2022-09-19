import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ Products }) => { 

    return (
        <>
            <img src={Products.picture} alt="imagen"/>
            <p className="titleProduct">{Products.title}</p>
            <p>${Products.price}</p>
            <p>peso: {Products.weight} </p>
            <p>{Products.description}</p>
            <ItemCount/>
            
        </>
    )
}

export default ItemDetail;