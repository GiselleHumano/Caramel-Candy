import React from 'react';
import { useState } from 'react';
import { RiShoppingCart2Fill } from "react-icons/ri";

function ItemCount({ stock, onAdd }) {
    const [Amount, setAmount] = useState(1);

    const addProduct = () => {
        if (Amount < stock) {
            setAmount(Amount + 1);
        }
    }

    const removeProduct = () => {
        if (Amount > 1) {
            setAmount(Amount - 1);
        }
    }

    const addCart = () => {
        if (Amount >= 1) {
            setAmount(1);
            onAdd(Amount)
        }
    }

    return (
        <div className='counter'>
            <div className='contador'
                style={{
                    opacity: stock === 0 ? "0" : "1",
                    position: stock === 0 ? "absolute" : "",
                }}>

                <button
                    onClick={removeProduct} className="buttonAddAndRemove"
                    style={{
                        cursor: stock === 0 ? "default" : "",
                    }}>-
                </button>

                <span>{Amount}</span>

                <button
                    onClick={addProduct} className="buttonAddAndRemove"
                    style={{
                        cursor: stock === 0 ? "default" : "",
                    }}>+
                </button>

            </div>
            <div className="buttonAddCart">
                <button
                    style={{
                        pointerEvents: stock === 0 ? "none" : "all",
                        opacity: stock === 0 ? ".5" : "1",
                    }}
                >
                    <RiShoppingCart2Fill className="cartAddIcon" />
                    <input className="clickStock"
                        type="button"
                        value={stock === 0 ? "No hay más stock" : "Agregar al carrito"}
                        onClick={() => {
                            addCart();
                            addProduct({ ...ItemCount });
                        }}
                    />
                </button>
            </div>
        </div>
    );
}

export default ItemCount;