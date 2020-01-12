import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { red } from '@material-ui/core/colors';
//need to import when using Dashboard structure/////////////
import BuyerHeader from './BuyerHeader.js';
import BuyerSidebar from './BuyerSidebar.js';
import BuyerFooter from './BuyerFooter.js';
////////////////////////////////////////////////////////////
function StateButton(props) {
  //seller check order 寫好後:
  //if arrived => button
  //else {order.state}
  const order = props.order;
  if(order.state == 5) {
    return(
      <div>
        <Button color="primary" disabled>
          {props.stateMap(order.state)}
        </Button>
        <Button color="primary" 
                onClick={(event) => {props.onSetOrder(event,{id: order.id,
                                                            buyer_address: order.buyer_address,
                                                            seller_address: order.seller_address,
                                                            dueTime: order.dueTime,
                                                            state: 6,
                                                            location: order.location,
                                                            goods: order.goods});
                                     props.onSetPage(event,'BuyerCheckOrderPage');
                                    }}
                component={RouterLink} to='/dist/Confirm'>
          Recieve
        </Button>
      </div>
    );
  }
  else {
    return(
      <Button color="primary" disabled>
        {props.stateMap(order.state)}
      </Button>
    );
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    maxWidth: 345,
  },
}));

const BuyerCheckOrderPage = (props) => {
  const order = props.order;
  const shopGoods = props.shopGoods;
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <CssBaseline />
      <BuyerHeader />
      <BuyerSidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid style={{height: 500, overflow: 'auto', marginTop: 32, marginLeft: '37%', padding: 20}}>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: <StateButton order={order} onSetOrder={props.onSetOrder} onSetPage={props.onSetPage} stateMap={props.stateMap}/>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${props.onCheckPrice(order.goods)}
          </Typography>
          {shopGoods.map((good,i) => (
                <Card className={classes.card}>
                    <CardHeader
                    title={good.name}
                    subheader={'$' + good.price}
                    />
                    <CardMedia
                    className={classes.media}
                    image={good.img}
                    title={good.img}
                    />
                    <CardContent>
                      Num: {order.goods[i]}
                    </CardContent>
                </Card> 
            ))}
          </Grid>
          <BuyerFooter />
        </Container>
      </main>
    </div>
  );
}

export default BuyerCheckOrderPage