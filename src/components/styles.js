import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        maxWidth:'100%'
    },
     toolbar: theme.mixins.toolbar,
     media: {
       height: 350,
       
  },
  cardContent: {
    display: 'flex',
    alignItems:'baseline',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    }
}))