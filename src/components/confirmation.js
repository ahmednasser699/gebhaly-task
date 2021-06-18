import React from 'react'
import { List, ListItem, ListItemText, Typography, Button } from '@material-ui/core'
import Swal from 'sweetalert2'
import { useHistory} from 'react-router-dom'

const Confirmation = ({ cart, totalcost, clearCart }) => {
    const history = useHistory();
    const confirm = () => {
        Swal.fire({
    title: 'success!',
    text: 'Thank You For Your Purchase',
    icon: 'success',
    confirmButtonText: 'back to home'
    
    }).then((resault)=>{
    if (resault.isConfirmed) {
                history.push('/')
                clearCart()
            }
        })
    }
    return (
        <div style={{marginTop:'100px', textAlign:'center'}}>
            <h2>your order</h2>
            
             <List disablePadding style={{maxWidth:"70%", margin:"auto"}}>
                {cart.map(item => (
                    <ListItem key={item.id} style={{padding:'10px 0', position:"relative"}}>
                        <ListItemText primary={item.title} secondary={`quantity: ${item.quantity}`} />
                        <img src={ item.image} alt='img' height='60' width="60" style={{position:"absolute", left:"25%"}} />
                        <Typography variant='h6'>{ 'unit price: '+ item.price}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{ padding: '10px 0', display:"block" }} >
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontWeight:'700'}}>
                        {totalcost()}
                    </Typography>
                </ListItem>
                <Button variant="contained" color="primary" onClick={confirm}  >confirm purchase</Button>
            </List> 
            
        </div>
    )
}

export default Confirmation
