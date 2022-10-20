import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CacheContext, { CacheProvider } from './contexts/CacheContext';
import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import Favoritos from './components/Favoritos';
import { CartProvider } from './contexts/CartContext';

function App() {

    return (
      <BrowserRouter>
        <CacheProvider>
          <CartProvider>
            <NavBar />
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