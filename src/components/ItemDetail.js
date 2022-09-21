import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ Products }) => { 

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
                <ItemCount/>
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