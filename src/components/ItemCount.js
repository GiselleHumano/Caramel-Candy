import React from 'react';
import { useState } from 'react';
import { RiShoppingCart2Fill} from "react-icons/ri";
function ItemCount() { 
    const [Amount, setAmount] = useState(1);
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
    }else{
        alert("Por favor, seleccione una cantidad valida")
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
        <div className='contador'>
            <button onClick={removeProduct} className="buttonAddAndRemove">-</button>
            <span>{Amount}</span>
            <button onClick={addProduct} className="buttonAddAndRemove">+</button>
        </div>
        <div className="buttonAddCart">
            <button onClick={addCart}><RiShoppingCart2Fill className='cartAddIcon'/> Agregar al Carrito</button>
        </div>
    </div>
    );
}

export default ItemCount;