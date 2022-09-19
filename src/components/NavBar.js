import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <header>
    <h1>Caramel Candy</h1>
    <p className="categorias">
        Inicio
    </p>
    <p className="categorias">
        Productos
    </p>
    <p className="categorias">
        Contacto
    </p>
    <figcaption>
        <CartWidget/>
    </figcaption>
    </header>
        </>
    )
}

export default NavBar;