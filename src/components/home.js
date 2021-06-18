import React from 'react'
import { Card, CardActions, IconButton, Typography, CardContent, CardMedia, Grid } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

const Home = ({ items, addToCart }) => {
    const classes = useStyles();

    return (
        <div>
        <div className={classes.toolbar}></div>
        <Grid container justify='center'  style={{overflow:"hidden"}}>
            {items.map(item => (
              <Grid item key={item.id} xs={12} sm={6} md={4} style={{marginTop:"15px", maxWidth:"320px", marginRight:"20px"}}>
                <Card className={classes.root}>
                <CardMedia image={item.image} title={item.title} className={ classes.media}/>
                <CardContent>
                    <div className={classes.cardContent}>
                    <Typography variant="h4" gutterBottom>{item.title}</Typography>
                    <Typography variant="h6" color="secondary">{item.price + " LE"}</Typography>
                   
                    </div>
                   <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>{item.category}</Typography>
                    <Typography variant="h6" color="primary">{item.available_quantity}</Typography>
                   
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions} >
                    <IconButton aria-label="add to chart" onClick={()=>addToCart(item)}>
                        <AddShoppingCart /> add to cart
                    </IconButton>
                
                </CardActions>
            </Card>            
              </Grid> 
            ))}
        </Grid>
        </div>
    )
}

export default Home
