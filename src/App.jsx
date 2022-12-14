import './App.css';
import CartContextProvider from './components/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart';


const App = () => {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/*" element={<Home />}/>
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter >
        </CartContextProvider>
    </>
  )
}

export default App;