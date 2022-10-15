import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MapComponent from './components/MapComponent';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Events from './components/Events';
import Intercambiabilidad from './components/Intercambiabilidad';
import DarkProductList from './components/DarkProductList';
import Condionales from './components/Condicionales';
import { CacheProvider } from './contexts/CacheContext';
import FavoritosContext, { FavoritosProvider } from './contexts/FavoritosContext';
import { useEffect, useState } from 'react';
import Favoritos from './components/Favoritos';
import {doc, getFirestore, getDoc} from 'firebase/firestore'


//function App() {
  // console.log('hola esto está funcionando');
   //const value = 100
 
   //const saludar = () => console.log('Holaaaaa')
 
  //return (
    // <>
     // <NavBar />
     // <ItemListContainer greeting={'Bienvenidos a la Tienda de Mascotas'} />
     
    // </>
   //);
// }
 
function App() {

  useEffect (() => {
    const database = getFirestore ();

    const itemReference = doc (database, 'Items', 'QDt8XA0lTRIXvSS0vYxo');

    getDoc(itemReference)
     .then((snapshot) => {
      if(snapshot.exists()) {
        const item ={
          id: snapshot.id,
          ...snapshot.data()
        };
        console.log(item);
      }
     })
     .catch(error => console.warn(error))

  }, []);

  return(
 <BrowserRouter>
     <CacheProvider>
  <NavBar />
   {/* <Events /> */}
   {/*<Intercambiabilidad />*/}
   {/*} <Condionales />*/}
   {/*<DarkProductList />*/}
        <FavoritosProvider>
           <Routes>
             <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a tienda de mascotas'} />} />
             <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a tienda de mascotas'} />} />
             <Route path='/item/:id' element={<ItemDetailContainer />} />
             <Route path='/cart' element={<Cart />} />
             <Route path='/checkout' element={<Checkout />} />
             <Route path='/favs' element={<Favoritos />} />
           </Routes>
        </FavoritosProvider>
       </CacheProvider>
 </BrowserRouter>
  );
}

 export default App;