import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import BuyerOrders from './BuyerOrders.js'
//need to import when using Dashboard structure/////////////
import BuyerHeader from './BuyerHeader.js';
import BuyerSidebar from './BuyerSidebar.js';
import BuyerFooter from './BuyerFooter.js';
////////////////////////////////////////////////////////////

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

const BuyerOrderListPage = (props) => {
  const classes = useStyles();
  const orderList = props.orderList;

  return(
    <div className={classes.root}>
      <CssBaseline />
      <BuyerHeader />
      <BuyerSidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <BuyerOrders orderList={orderList} onCheckPrice={props.onCheckPrice} onCheckOrder={props.onCheckOrder}
                               onCheckName={props.onCheckName} onSetOrder={props.onSetOrder} onSetGoods={props.onSetGoods}
                               stateMap={props.stateMap}/>
              </Paper>
            </Grid>
          </Grid>
          <Button color="primary" onClick={(event) => props.onCheckOrder(event)}>
            Refresh
          </Button>
          <BuyerFooter />
        </Container>
      </main>
    </div>
  );
}

export default BuyerOrderListPage