import { RiShoppingCart2Fill} from "react-icons/ri";
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";
const CartWidget = () => {

    const { quantity } = useContext(CartContext);
    return (
        <Link to='/Cart'>
        <div className="carrito">
            <RiShoppingCart2Fill/>
            <p>{quantity}</p>
        </div>
        </Link>
    );
}

export default CartWidget;