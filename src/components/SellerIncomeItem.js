import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SellerIncomeItem(props) {
  const classes = useStyles();
  const orderList = props.orderList;
  const shopGoods = props.shopGoods;
  return (
    <React.Fragment>
      <Title>Your Income List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Finish Time</TableCell>
            <TableCell>{shopGoods[0].name} (${shopGoods[0].price})</TableCell>
            <TableCell>{shopGoods[1].name} (${shopGoods[1].price})</TableCell>
            <TableCell>{shopGoods[2].name} (${shopGoods[2].price})</TableCell>
            <TableCell>Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.dueTime.substr(0,4)}/{order.dueTime.substr(4,2)}/{order.dueTime.substr(6,2)} {order.dueTime.substr(8,2)}:{order.dueTime.substr(10,2)}</TableCell>
              <TableCell>{order.goods[0]}</TableCell>
              <TableCell>{order.goods[1]}</TableCell>
              <TableCell>{order.goods[2]}</TableCell>
              <TableCell>${props.onCheckPrice(order.goods)}</TableCell>
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </React.Fragment>
  );
}