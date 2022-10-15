import { useState } from "react";
import './ItemDetail.css';
import Item from "./Item";
import ItemCount from "./ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [count, setCount] = useState(0);

  const handleAdd = (value) => {
    setCount(value);
  };

  return (
    <div className='itemDetailContainer'>
      <Item product={product} />
      <ItemCount initial={0} stock={10} onAdd={handleAdd} />
    </div>
  );
}
 
export default ItemDetail;