import {useEffect, useState} from 'react';
import axios from 'axios';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"

          spacing={2} direction="row"
        >
    
        
  <div onSubmit={newItem} >
    {/* <label htmlFor="item-input">Item</label >
    <input  onChange={e => setItemName(e.target.value)} />
    <label htmlFor="quantity-input">Quantity</label>
    <input  onChange={e => setQuantityList(e.target.value)} />
    <label htmlFor="unit-input">Unit</label>
    <input onChange={e => setUnitList(e.target.value)} />
    <button type="save">Done</button> */}
     <TextField id="outlined-basic" label="Item" variant="outlined" color="success" onChange={e => setItemName(e.target.value)} />
    <TextField id="outlined-basic" label="Quanity" variant="outlined" color="success" onChange={e => setQuantityList(e.target.value)} />
    <TextField id="outlined-basic" label="Unit" variant="outlined" color="success" onChange={e => setUnitList(e.target.value)} />
    <Button variant="contained" color="success">Save</Button>
  </div>
  </Box>
    
    )
}


export default NewItem;