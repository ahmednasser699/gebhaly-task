import React,{useState, useEffect} from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './history'
import axios from 'axios'

import Home from './components/home'
import Cart from './components/cart'
import Navbar from './components/navbar/navbar'
import Confirmation from './components/confirmation'




const App = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([])
    

    const getData = async() => {
        const response = await axios.get('http://localhost:3001/items');
        setItems(response.data)
        console.log(response.data)
    }
    useEffect(() => {
       getData() 
    }, [])
    
    const addToCart = (item) => {
        if (!cart.includes(item)) {
            setCart([...cart, item]);
            
        }
    }

    const clearCart = () => {
        let newcart = [...cart];
        newcart.forEach(item => {
            item.quantity=1
        })
        setCart(newcart);
        setCart([])
    }

    const increase = (item) => {
        let newcart = [...cart];
        let index = newcart.indexOf(item);
        newcart[index].quantity= newcart[index].quantity+1;
        setCart(newcart)
       
    }

    const decrease = (item) => {
        let newcart = [...cart];
        let index = newcart.indexOf(item);
        if (newcart[index].quantity <= 1) {
            remove(item)
        } else {
            
            newcart[index].quantity= newcart[index].quantity-1;
            setCart(newcart)
        }
    }

    const totalcost = () => {
        let totcost = 0;
        cart.forEach(item => {
            let cost = item.price * item.quantity;
            totcost = totcost + cost;
        })
        return totcost
    }

    const remove = (item) => {
        let newcart = [...cart];
        let index = newcart.indexOf(item);
        newcart[index].quantity = 1;
        newcart.splice(index, 1);
        setCart(newcart)
    }

    return (
        <Router history={history}>
            <Navbar totalitems={cart} />
            <Switch>
                <Route path="/" exact>
                    <Home items={items} addToCart={addToCart} />
                </Route>
                <Route path="/cart" exact>
                    <Cart cart={cart} clearCart={clearCart} increase={increase} decrease={decrease} totalcost={totalcost} remove={remove} />
                </Route>
                <Route path="/confirmation" exact> 
                    <Confirmation cart={ cart} totalcost={totalcost} clearCart={clearCart} />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
