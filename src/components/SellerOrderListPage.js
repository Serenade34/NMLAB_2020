import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SellerOrders from './SellerOrders.js'
//need to import when using Dashboard structure/////////////
import SellerHeader from './SellerHeader.js';
import SellerSidebar from './SellerSidebar.js';
import SellerFooter from './SellerFooter.js';
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

const SellerOrderListPage = (props) => {
  const classes = useStyles();
  const orderList = props.orderList;

  return(
    <div className={classes.root}>
      <CssBaseline />
      <SellerHeader />
      <SellerSidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <SellerOrders orderList={orderList} onCheckPrice={props.onCheckPrice} onCheckOrder={props.onCheckOrder}
                                onSetOrder={props.onSetOrder} onSetGoods={props.onSetGoods} stateMap={props.stateMap}/>
              </Paper>
            </Grid>
          </Grid>
          <Button color="primary" onClick={(event) => props.onCheckOrder(event)}>
            Refresh
          </Button>
          <SellerFooter />
        </Container>
      </main>
    </div>
  );
}

export default SellerOrderListPage