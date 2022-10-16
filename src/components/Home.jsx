import ItemListContainer from "../containers/ItemListContainer";
import { Routes, Route } from 'react-router-dom';

const home =()=>{
    return (
        <>
        <section className="mainHome">
            <div className="textHome">
            <h2>TEMPORADA HALLOWEEN</h2>
            <p>Aprovecha los nuevos productos de la temporada</p>
            <a href="#productsHome"><button>🡳</button></a>
            </div>
        <img src="./img/imagenfantasmas.svg" alt="imagen fantasmas halloween" />
        </section>
        <div id="productsHome">
        <b></b>
        <h3>PRODUCTOS</h3>
        <b></b>
        </div>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
        </Routes>
        </>
    )
}

export default home;