import React from 'react';
import Item from './Item';
const ItemList = ( {Products} ) => {
    
    return (
        <>
        {Products.map( (Products) => <Item key={Products.id} Products ={(Products)}/>)}
        </>
)
}

export default ItemList;