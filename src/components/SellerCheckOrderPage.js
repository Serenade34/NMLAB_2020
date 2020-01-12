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
import SellerHeader from './SellerHeader.js';
import SellerSidebar from './SellerSidebar.js';
import SellerFooter from './SellerFooter.js';
////////////////////////////////////////////////////////////
function StateButton(props) {
  const order = props.order;
  if(order.state == 1) {
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
                                                            state: 3,
                                                            location: order.location,
                                                            goods: order.goods});
                                     props.onSetPage(event,'SellerCheckOrderPage');
                                    }}
                component={RouterLink} to='/dist/Confirm'>
          Accept
        </Button>
        <Button color="primary" 
                onClick={(event) => {props.onSetOrder(event,{id: order.id,
                                                            buyer_address: order.buyer_address,
                                                            seller_address: order.seller_address,
                                                            dueTime: order.dueTime,
                                                            state: 2,
                                                            location: order.location,
                                                            goods: order.goods});
                                     props.onSetPage(event,'SellerCheckOrderPage');
                                    }}
                component={RouterLink} to='/dist/Confirm'>
          Deny
        </Button>
      </div>
    );
  }
  else if(order.state == 3){
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
                                                            state: 4,
                                                            location: order.location,
                                                            goods: order.goods});
                                     props.onSetPage(event,'SellerCheckOrderPage');
                                    }}
                component={RouterLink} to='/dist/Confirm'>
          Start Delivering
        </Button>
      </div>
    );
  }
  else if(order.state == 2){
    return(
      <div>
        <Button color="primary" disabled>
          {props.stateMap(order.state)}
        </Button>
      </div>
    );
  }
  else if(order.state == 4) {
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
                                                            state: 5,
                                                            location: order.location,
                                                            goods: order.goods});
                                     props.onSetPage(event,'SellerCheckOrderPage');
                                    }}
                component={RouterLink} to='/dist/Confirm'>
          Arrive
        </Button>
      </div>
    );
  }
  else if(order.state == 5) {
    return(
      <div>
        <Button color="primary" disabled>
          {props.stateMap(order.state)}
        </Button>
      </div>
    );
  }
  else if(order.state == 6) {
    return(
      <div>
        <Button color="primary" disabled>
          {props.stateMap(order.state)}
        </Button>
      </div>
    );
  }
  else {
    return(
      <div>There is something going wrong -- SellerCheckOrderPage -- StateButton()</div>
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

const SellerCheckOrderPage = (props) => {
  const order = props.order;
  const shopGoods = props.shopGoods;
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <CssBaseline />
      <SellerHeader />
      <SellerSidebar />
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
          <SellerFooter />
        </Container>
      </main>
    </div>
  );
}

export default SellerCheckOrderPage