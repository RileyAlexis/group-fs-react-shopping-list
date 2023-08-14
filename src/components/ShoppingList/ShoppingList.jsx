import React, { useState , useEffect } from 'react';
import './ShoppingList.css'; 
import axios from 'axios';

function ShoppingList() {
    const [shoppingList, setShoppingList] = useState([]);
    const [itemName, setItemName] = useState('');
    const [quantityList, setQuantityList] = useState('')
    const [unitList, setUnitList] = useState('')



    const fetchList = () => {
        axios.get('/shoppingList')
        .then((response) => {
            console.log(response);
            setShoppingList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchList();
      }, []);

      const newItem = (event) => {
        event.preventDefault();
        axios.post(`/shoppingList/`, {item: itemName , quantity: quantityList , unit: unitList, complete: false})
        .then( (response) => {
            fetchList();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // const toggleComplete = (id) => {
    //     axios.put(`/shoppingList/complete/${id}`)
    //     .then((response) => {
    //         console.log(response);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

      return (
        <div className="container">
        <section className="new-shopping-list">
        <form onSubmit={newItem}>
          <label htmlFor="item-input">Item</label>
          <input  onChange={e => setItemName(e.target.value)} />
          <label htmlFor="quantity-input">Quantity</label>
          <input  onChange={e => setQuantityList(e.target.value)} />
          <label htmlFor="unit-input">Unit</label>
          <input onChange={e => setUnitList(e.target.value)} />
          <button type="save">Done</button>
        </form>   
        <div className="card">
        <ul>
        {shoppingList.map(item =>
            (
                <>
            <li key={item.id}>
              {item.item} {item.quantity} Quantity {item.unit}
            </li>
            </>
            ))}
              </ul>
            </div>

            </section>
            </div>
            
      );
}

export default ShoppingList;