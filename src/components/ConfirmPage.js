import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { red } from '@material-ui/core/colors';

function Buttons(props) {
    const yesLink = props.yesLink;
    const noLink = props.noLink;
    const order = props.order;
    return(
        <div>
            <Button color="primary" component={RouterLink} to={yesLink} onClick={(event) => {props.onUpdateOrder(event);
                                                                                             props.onCheckOrder(event);
                                                                                             }}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to={noLink} onClick={(event) => {props.onSetOrder(event,order);
                                                                                            props.onCheckOrder(event);
                                                                                            }}>
                No
            </Button>
        </div>
    );
}
/*
function Buttons2(props) {
    const yesLink = props.yesLink;
    const noLink = props.noLink;
    const order = props.order;
    const yesOrder = props.yesOrder;
    const noOrder = props.noOrder;
    return(
        <div>
            <Typography>Status: {order.state}</Typography>
            <Button color="primary" component={RouterLink} to={yesLink} onClick={(event) => props.onSetOrder(event,yesOrder)}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to={noLink} onClick={(event) => props.onSetOrder(event,noOrder)}>
                No
            </Button>
            <Button color="primary" component={RouterLink} to={yesLink} onClick={(event) => props.onSubmitOrder(event)}>
                Submit
            </Button>
        </div>
    );
}
*/
function BuyerCheckOrderPage(props) {
    const order = props.order;
    return(
        <div>
            <Typography>Did you recieve your goods?</Typography>
            <Button color="primary" component={RouterLink} to='/dist/BuyerOrderList' onClick={(event) => {props.onUpdateOrder(event);
                                                                                                          props.onCheckOrder(event);
                                                                                                          props.onPay(event);
                                                                                                         }}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to='/dist/BuyerCheckOrder' onClick={(event) => {props.onSetOrder(event,{id: order.id,
                                                                                                                                buyer_address: order.buyer_address,
                                                                                                                                seller_address: order.seller_address,
                                                                                                                                dueTime: order.dueTime,
                                                                                                                                state: 5,
                                                                                                                                location: order.location,
                                                                                                                                goods: order.goods});
                                                                                                           props.onCheckOrder(event);
                                                                                                           }}>
                No
            </Button>
            {/* 也許可以用 additoinal event 來做
            <Buttons1 yesLink='/dist/BuyerOrderList'
                      noLink='/dist/BuyerCheckOrder'
                      onSetOrder={props.onSetOrder}
                      onSubmitOrder={props.onSubmitOrder}
                      onCheckOrder={props.onCheckOrder}
                      order={{id: order.id,
                             buyer_address: order.buyer_address,
                             seller_address: order.seller_address,
                             dueTime: order.dueTime,
                             state: 'arrive',
                             location: order.location,
                      goods: order.goods}} />*/}
        </div>
        
    );
}

function BuyerOrderPage(props) {
    const order = props.order;
    const shopGoods = props.shopGoods;
    return(
        <div>
            <Typography>Are you sure to order:</Typography>
            <Typography>{shopGoods[0].name}: {order.goods[0]}</Typography>
            <Typography>{shopGoods[1].name}: {order.goods[1]}</Typography>
            <Typography>{shopGoods[2].name}: {order.goods[2]}</Typography>
            <Typography>Price: ${props.onGetPrice(order.goods)}</Typography>
            <Typography>Deliver at {order.dueTime.substr(0,4)}/{order.dueTime.substr(4,2)}/{order.dueTime.substr(6,2)} {order.dueTime.substr(8,2)}:{order.dueTime.substr(10,2)}</Typography>
            <Button color="primary" component={RouterLink} to='/dist/BuyerOrderList' onClick={(event) => {props.onSubmitOrder(event)}}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to='/dist/BuyerOrder' >
                No
            </Button>
        </div>
    );
}

function SellerCheckOrderPage(props) {
    const order = props.order;
    var question = '';
    var back_state = '';
    if(order.state == 3) {
        question = 'Are you sure to accept this order?';
        back_state = 1;
        
    }
    else if(order.state == 2) {
        question = 'Are you sure to deny this order?';
        back_state = 1;
    }
    else if(order.state == 4) {
        question = 'Are you ready to deliver this order?';
        back_state = 3;
    }
    else if(order.state == 5) {
        question = 'Are you arrived?';
        back_state = 4;
    }
    else {
        console.log('There is something going wrong(ConfirmPage.js -- SellerCheckOrderPage())');
    }
    return(
        <div>
            <Typography>{question}</Typography>
            <Buttons yesLink='/dist/SellerOrderList'
                      noLink='/dist/SellerCheckOrder'
                      onSetOrder={props.onSetOrder}
                      onUpdateOrder={props.onUpdateOrder}
                      onCheckOrder={props.onCheckOrder}
                      order={{id: order.id,
                              buyer_address: order.buyer_address,
                              seller_address: order.seller_address,
                              dueTime: order.dueTime,
                              state: back_state,
                              location: order.location,
                              goods: order.goods}} />
        </div>
    );
}

function NewUserPage(props) {
    const user = props.user;
    return(
        <div>
            <Typography>Are you sure to sign in as:</Typography>
            <Typography>Name:       {user.name}</Typography>
            <Typography>Address:    {user.address}</Typography>
            <Typography>User Type:  {user.type}</Typography>
            <Button color="primary" component={RouterLink} to='/dist' onClick={(event) => {props.onSubmitAddUser(event)}}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to='/dist/NewUser' >
                No
            </Button>
        </div>
    );
}

function SellerShopPage(props) {
    const shopGoods = props.shopGoods;
    const original_shopGoods = props.original_shopGoods;
    return(
        <div>
            <Typography>Are you sure to change goods name?</Typography>
            <Typography>{original_shopGoods[0].name} => {shopGoods[0].name}</Typography>
            <Typography>{original_shopGoods[1].name} => {shopGoods[1].name}</Typography>
            <Typography>{original_shopGoods[2].name} => {shopGoods[2].name}</Typography>
            <Button color="primary" component={RouterLink} to='/dist/SellerShop' onClick={(event) => {props.onSubmitShopImg(event);
                                                                                                      props.onSubmitShop(event);}}>
                Yes
            </Button>
            <Button color="primary" component={RouterLink} to='/dist/SellerShop' onClick={(event) => {props.onSetShopImg(event,original_shopData)
                                                                                                      props.onSetShop(event,original_shopGoods)}}>
                No
            </Button>
        </div>
    );
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

const ConfirmPage = (props) => {
    const classes = useStyles();
    const user = props.user;
    const page = props.page;
    const order = props.order;
    const shopGoods = props.shopGoods;
    const original_shopGoods = props.original_shopGoods;

    if(page == 'BuyerCheckOrderPage') {
        return(
            <BuyerCheckOrderPage order={order} onCheckOrder={props.onCheckOrder} onPay={props.onPay}
                                 onSetOrder={props.onSetOrder} onUpdateOrder={props.onUpdateOrder}/>
        );
    }
    else if(page == 'SellerCheckOrderPage') {
        return(
            <SellerCheckOrderPage order={order} onCheckOrder={props.onCheckOrder}
                                  onSetOrder={props.onSetOrder} onUpdateOrder={props.onUpdateOrder}/>
        );
    }
    else if(page == 'NewUserPage') {
        return(
            <NewUserPage user={user} onSubmitAddUser={props.onSubmitAddUser}/>
        );
    }
    else if(page == 'SellerShopPage') {
        return(
            <SellerShopPage shopGoods={shopGoods} original_shopGoods={original_shopGoods}
                            onSubmitShop={props.onSubmitShop} onSetShop={props.onSetShop}
                            onSubmitShopImg={props.onSubmitShopImg} onSetShopImg={props.onSetShopImg}/>
        );
    }
    else if(page == 'BuyerOrderPage') {
        return(
            <BuyerOrderPage shopGoods={shopGoods} order={order}
                            onSubmitOrder={props.onSubmitOrder} onGetPrice={props.onGetPrice}/>
        );
    }
    else {
        console.log('Invalid Confirm Page -- ConfirmPage.js');
    }
    
  }
  
  export default ConfirmPage