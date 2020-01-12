import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SellerOrders(props) {
  const classes = useStyles();
  const orderList = props.orderList;
  return (
    <React.Fragment>
      <Title>Your Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>DueTime Time</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderList.map(order => (
            <TableRow key={order.id}>
              <TableCell>{order.dueTime.substr(0,4)}/{order.dueTime.substr(4,2)}/{order.dueTime.substr(6,2)} {order.dueTime.substr(8,2)}:{order.dueTime.substr(10,2)}</TableCell>
              <TableCell>{order.location}</TableCell>
              <TableCell>${props.onCheckPrice(order.goods)}</TableCell>
              <TableCell>{props.stateMap(order.state)}</TableCell>
              <TableCell align="right">
                <Button color="primary" component={RouterLink} to="/dist/SellerCheckOrder"
                        onClick={(event) => {props.onSetOrder(event,{id: order.id,
                                                                    buyer_address: order.buyer_address,
                                                                    seller_address: order.seller_address,
                                                                    dueTime: order.dueTime,
                                                                    state: order.state,
                                                                    location: order.location,
                                                                    goods: order.goods});
                                            props.onSetGoods(event,order.seller_address);
                                            props.onCheckOrder(event);
                                            }}>
                  Check
                </Button>
              </TableCell>
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </React.Fragment>
  );
}