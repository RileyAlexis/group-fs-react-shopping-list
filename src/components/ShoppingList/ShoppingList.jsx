import React, { useState , useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


function ShoppingList({fetchList, item}) {
  
    const buyItem = () => {
      console.log('Buy Item', item);
      axios.put(`/shoppingList/complete/${item.id}`)
      .then ((response) => {
        console.log(response);
        fetchList();
      })
      .catch((error) => {
        console.log(error);
      })
    }

    const deleteItem = () => {
      swal({
        title: `Delete ${item.item}?`,
        text: 'Are you sure?',
        icon: "warning",
        buttons: true,
        dangerMode: true
        })
        .then((value) => {
            if (value) {
            axios.delete(`/shoppingList/${item.id}`)
            .then((response) => {
                fetchList();
            }).catch((error) => {
                console.log(error);
            })
        }
      }
        )
      }

            

      return (
        
        <div className={`item-box ${item.complete ? 'completed' : ''}`} >
          <div className="item-box-text">
          <p>{item.item}</p>
          <p>Qty: {item.quantity}, {item.unit}</p>
          <p>{item.complete}</p>
          </div>
          <div className="item-box-btn-box">
              <button className="buyBtn" onClick={buyItem}>Buy</button> 
          <button className="deleteBtn" onClick={deleteItem}>X</button>
          </div>
        </div>
          
      )
            }

export default ShoppingList;