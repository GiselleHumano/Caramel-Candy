import React from 'react';
import { useState } from 'react';

function ItemCount() { 
    const [Amount, setAmount] = useState(0);
    const stock = 14;

const addProduct = () => {
    if(Amount < stock){
        setAmount(Amount+1);
    }else{
        alert(`No contamos con mas stock, disculpe las molestias`)
    }
}

const addCart = () => {
    if(Amount !== 0){
        alert(`Se agrego ${Amount} productos al carrito`)
        setAmount(1);
    }
}
const removeProduct = () => {
    if(Amount >= 1){
        setAmount(Amount-1);
    }else{
        alert("Por favor, seleccione una cantidad valida")
    }
}
    return (
    <div className='counter'>
        <div >
            <button onClick={removeProduct} className="buttonAddRemove">-</button>
            <span >{Amount}</span>
            <button onClick={addProduct} className="buttonAddRemove">+</button>
        </div>
        <div>
            <button onClick={addCart} className="buttonAdd">Agregar al Carrito</button>
        </div>
    </div>
    );
}

export default ItemCount;