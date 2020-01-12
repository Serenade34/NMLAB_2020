import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function SellerIncomeDeposits(props) {
  const classes = useStyles();
  const orderList = props.orderList;
  const shopGoods = props.shopGoods;

  function totalIncome(orderList,shopGoods) {
    var i = 0;
    var total = 0;
    while(i<orderList.length) {
      total = total + orderList[i].goods[0]*shopGoods[0].price + orderList[i].goods[1]*shopGoods[1].price + orderList[i].goods[2]*shopGoods[2].price;
      i++;
    }
    return total;
  }
  return (
    <React.Fragment>
      <Title>Total Income</Title>
      <Typography component="p" variant="h4">
        ${totalIncome(orderList,shopGoods)}
      </Typography>
      {/*}
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
  */}
    </React.Fragment>
  );
}