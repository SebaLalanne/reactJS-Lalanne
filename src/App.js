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
  return(
 <BrowserRouter>
  <NavBar />
   {/* <Events /> */}
   <Intercambiabilidad />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a tienda de mascotas'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a tienda de mascotas'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
 </BrowserRouter>
  );
}

 export default App;