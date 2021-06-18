import React from 'react'
import {Link } from 'react-router-dom'
import { Card, Typography, CardContent, CardMedia, Grid, Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import useStyles from './styles'

const Cart = ({cart, increase, decrease, totalcost, clearCart, remove}) => {

    const classes = useStyles();
    return (
        <div>
        <div className={classes.toolbar}></div>
        <Grid container justify='center' >
            {cart.map(item => (
              <Grid item key={item.id} xs={12} sm={6} md={4} style={{marginTop:"15px", maxWidth:"320px", marginRight:"20px"}} >
                <Card className={classes.root}>
                <CardMedia image={item.image} title={item.title} className={ classes.media}/>

                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h4" gutterBottom>{item.title}</Typography>
                        <Typography variant="h6" gutterBottom>{ item.price + " LE"}</Typography>
                    </div>
                                    
                    <div className={classes.cardContent}>
                    <Button variant="contained" color="primary" onClick={()=>decrease(item)} ><Remove /></Button>
                    <Typography variant="h3" gutterBottom>{item.quantity}</Typography>
                    <Button variant="contained" color="primary" onClick={()=>increase(item)} ><Add /></Button>
                   
                    </div>
                    <div style={{width:"100%" , textAlign:"center"}}>
                       <Button variant="contained" color="secondary" onClick={()=>remove(item)} >Remove</Button> 
                    </div>
                </CardContent>

            </Card>            
              </Grid> 
            ))}
                
            </Grid>
            {cart.length>0? <div style={{ display:'flex', justifyContent:'space-around', margin:'60px'}}>
                <Typography variant="h5" color="secondary" > {'total cost: '}<span style={{ fontWeight: "bold", color: "red" }}>{totalcost()}</span> { ' LE'}</Typography>
                <Button component={Link} to="/confirmation" variant="contained" color="primary"  >purchase</Button>
                <Button variant="contained" color="secondary" onClick={clearCart} >Clear Cart</Button>
            </div> :
            <div style={{marginTop:"40px"}}>you don't have any items in cart <Link to="/">back to add some...</Link></div>}
        </div>
               
    )
}

export default Cart
