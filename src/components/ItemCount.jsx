import React from 'react';
import { useState } from 'react';
import { RiShoppingCart2Fill} from "react-icons/ri";

function ItemCount({ stock, initial, onAdd }) { 
    const [Amount, setAmount] = useState(initial);

function addProduct  () {
    if(Amount < stock){
        setAmount(Amount+1);
    }else{
        alert(`No contamos con más stock de este producto`)
    }
}

function removeProduct  () {
    if(Amount >= 1){
        setAmount(Amount-1);
    }else{
        alert("Por favor, seleccione una cantidad valida")
    }
}

function addCart () {
    if (Amount !== 0) {
        alert(`Se agrego ${Amount} productos al carrito`)
        setAmount(1);
        onAdd(Amount) 
    } else {
        alert("Cantidad no valida")
        setAmount(1);
    }
}

    return (
    <div className='counter'>
        <div className='contador'>
            <button onClick={removeProduct} className="buttonAddAndRemove">-</button>
            <span>{Amount}</span>
            <button onClick={addProduct} className="buttonAddAndRemove">+</button>
        </div>
        <div className="buttonAddCart">
            <button onClick={addCart}><RiShoppingCart2Fill className="cartAddIcon"/> Agregar al Carrito</button>
        </div>
    </div>
    );
}

export default ItemCount;