import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MapComponent from './components/MapComponent';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Events from './components/Events';
import Intercambiabilidad from './components/Intercambiabilidad';
import DarkProductList from './components/DarkProductList';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import Condionales from './components/Condicionales';
import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import Favoritos from './components/Favoritos';
import { doc, getFirestore, getDoc, collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './contexts/CartContext';

function App() {

    return (
      <BrowserRouter>
        <CacheProvider>
          <CartProvider>
            <NavBar />
            {/* <Events /> */}
            {/* <Intercambiabilidad /> */}
            {/* <DarkProductList /> */}
            {/* <Condionales /> */}
            <FavoritosProvider>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda de mascotas'} />} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a la tienda de mascotas'} />} />
                <Route path='/Item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/favs' element={<Favoritos />} />
              </Routes>
            </FavoritosProvider>
          </CartProvider>
        </CacheProvider>
      </BrowserRouter>
    );
}

export default App;