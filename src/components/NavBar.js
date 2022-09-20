import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <header>
        <Link to="/"><h1>Caramel Candy</h1> </Link>
    <Link to="/category/4"><p className="categorias">
        Paletas
    </p>
    </Link>
    <Link to="/category/2"><p className="categorias">
        Chocolates
    </p>
    </Link>
    <Link to="/category/6"><p className="categorias">
        Sin tacc
    </p>
    </Link>
    <figcaption>
        <CartWidget/>
    </figcaption>
    </header>
        </>
    )
}

export default NavBar;