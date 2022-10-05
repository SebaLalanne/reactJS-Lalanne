import { useEffect, useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getAllProducts, getAProductsByCategory } from '../utils/products';



const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const [products , setProducts] = useState([]);





   useEffect (() => {
   
    if (categoryId) {
        getAProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error) )
    } else{
        getAllProducts ()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error) )
    }
   
   }, [categoryId])

    return ( 
        <Container>
        <h1>Productos</h1>
        <h3 className="greeting">{greeting}</h3>
        <ItemList products ={products} />
        </Container>
        
        );
}
 
export default ItemListContainer;