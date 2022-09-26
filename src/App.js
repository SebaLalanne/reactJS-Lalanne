import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  console.log('hola esto está funcionando');
  const value = 100

  const saludar = () => console.log('Holaaaaa')

  return (
    <>
     <NavBar />
     <ItemListContainer greeting={'Bienvenidos a la Tienda de Mascotas'} />
    </>
  );
}

export default App;
