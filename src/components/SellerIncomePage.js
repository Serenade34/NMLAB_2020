import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import SellerIncomeItem from './SellerIncomeItem.js'
import SellerIncomeDeposits from './SellerIncomeDeposits.js';
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const SellerIncomePage = (props) => {
  const classes = useStyles();
  const orderList = props.orderList;
  const shopGoods = props.shopGoods;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  //const checkFinishOrder = props.checkFinishOrder;

  function checkFinishOrder(orderList) {
    var i = 0;
    var finish_orderList = [];
    while(i<orderList.length) {
      if(orderList[i].state == 6) {
          finish_orderList.push(orderList[i]);
      }
      /*console.log(i);
      console.log(orderList[i].state);*/
      i++;
    }
    //console.log(finish_orderList);
    return(finish_orderList);
  }

  return(
    <div className={classes.root}>
      <CssBaseline />
      <SellerHeader />
      <SellerSidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <SellerIncomeDeposits orderList={checkFinishOrder(orderList)} shopGoods={props.shopGoods}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                  <SellerIncomeItem orderList={checkFinishOrder(orderList)} shopGoods={shopGoods}
                                    onCheckPrice={props.onCheckPrice} onCheckOrder={props.onCheckOrder}/>
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

export default SellerIncomePage