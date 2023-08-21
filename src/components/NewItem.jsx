import {useEffect, useState} from 'react';
import axios from 'axios';

function NewItem ({fetchList}) {
    const [itemName, setItemName] = useState('');
    const [quantityList, setQuantityList] = useState('')
    const [unitList, setUnitList] = useState('')

    const newItem = (e) => {
        e.preventDefault();
        axios.post(`/shoppingList/`, {item: itemName , quantity: quantityList , unit: unitList, complete: false})
        .then((response) => {
            console.log(response);
            fetchList();
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    return (
        
        <div className="newItemBox">
        
        <form onSubmit={newItem}>
          <label htmlFor="item-input">Item</label>
          <input  onChange={e => setItemName(e.target.value)} />
          <label htmlFor="quantity-input">Quantity</label>
          <input  onChange={e => setQuantityList(e.target.value)} />
          <label htmlFor="unit-input">Unit</label>
          <input onChange={e => setUnitList(e.target.value)} />
          <button type="save">Done</button>
        </form>
        
        </div>
    

    )
}

export default NewItem;