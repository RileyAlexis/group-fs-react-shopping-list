import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

//Components
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import NewItem from '../NewItem.jsx';

function App() {
    const [shoppingList, setShoppingList] = useState(null);



const fetchList = () => {
    axios.get('/shoppingList/')
    .then((response) => {
        setShoppingList(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
}
    
    useEffect(() => {
    fetchList();
    }, []);

return (
    
        <div className="container">
    <div className="headertitle">
        <Header />
        </div>
        <NewItem fetchList={fetchList} />
    <div className="shoppinglist">
        {console.log('Shopping list', shoppingList)}
        {shoppingList?.map((item) => <ShoppingList key={item.id} fetchList={fetchList} item={item} />
        )}
        
        </div>
    </div>

);


}

export default App;
