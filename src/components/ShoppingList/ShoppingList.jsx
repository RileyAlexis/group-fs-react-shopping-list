import React, { useState , useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


//Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


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
        <Container maxWidth="lg" disableGutters >
        <Card className={item.complete ? 'completed' : ''} variant="outlined" 
            sx={{ 
                display: 'flex', 
                maxWidth:275, 
                gap:8, 
                mb:2,
                boxShadow: 1,
                borderRadius: 2,
                p: 2
                }}>
           <Box sx={{display: 'flex'}}>
          <CardContent >
          <Typography variant='h5' color="text.Primary" gutterBottom>
            {item.item}
          </Typography>
          <Typography sx={{ fontsize: 12 }} color="text.secondary">
            Qty: {item.quantity} - {item.unit}
          </Typography>
          </CardContent>
            <CardActions >
            <IconButton onClick={buyItem} color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
            <IconButton onClick={deleteItem} color="warning" aria-label="Delete item">
              <DeleteIcon />
            </IconButton>



            </CardActions>

        </Box>
        </Card>
        </Container>
        




        // <div className={`item-box ${item.complete ? 'completed' : ''}`} >
        //   <div className="item-box-text">
        //   <p>{item.item}</p>
        //   <p>Qty: {item.quantity}, {item.unit}</p>
        //   <p>{item.complete}</p>
        //   </div>
        //   <div className="item-box-btn-box">
        //       <button className="buyBtn" onClick={buyItem}>Buy</button> 
        //   <button className="deleteBtn" onClick={deleteItem}>X</button>
        //   </div>
        // </div>
          
      )
            }

export default ShoppingList;