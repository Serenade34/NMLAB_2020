import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
//import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
//need to import when using Dashboard structure/////////////
import SellerHeader from './SellerHeader.js';
import SellerSidebar from './SellerSidebar.js';
import SellerFooter from './SellerFooter.js';
////////////////////////////////////////////////////////////

function Content(props) {
  const classes = useStyles();
  return(
        <Card className={classes.card}>
          <CardHeader title={props.goodName}/>
          <CardMedia
            className={classes.media}
            image={props.shop_Img}
            title="HomeImage"
          />
          {props.children}
          <Typography>${props.goodPrice}</Typography>
        </Card>
  );
}

function SellerShopContainer(props) {
  const classes = useStyles();
  return(
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        {props.children}
      </Container>
    </main>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
  input: {
    display: 'none',
  },
}));



class SellerShopPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={{display: 'flex'}}>
            <CssBaseline />
            <SellerHeader />
            <SellerSidebar />
            <SellerShopContainer>
              <Grid style={{height: 500, overflow: 'auto',
                            marginTop: 32, marginLeft: '37%', padding: 20}}>
                  <Card style={{maxWidth: 345}}>
                    <CardHeader title={this.props.shopData.name}/>
                    <CardMedia
                      style={{height: 0,
                              paddingTop: '56.25%',}}
                      image={this.props.shopData.img}
                      title="ShopImage"
                    />
                    <CardContent>
                      <input
                        accept="image/*"
                        id="Shop image"
                        multiple
                        type="file"
                      />
                    </CardContent>
                  </Card>
                  <Content goodName={this.props.shopGoods[0].name}
                           goodPrice={this.props.shopGoods[0].price}
                           shop_Img={this.props.shopGoods[0].img}>
                    <div>
                      <CardContent>
                        <input
                          accept="image/*"
                          id="Good1 image"
                          multiple
                          type="file"
                        />
                        <TextField 
                          label = "Good1 name"
                          name = "Good1 name"
                          id = "Good1 name"
                        />
                      </CardContent>
                    </div>
                  </Content>
                  <Content goodName={this.props.shopGoods[1].name}
                           goodPrice={this.props.shopGoods[1].price}
                           shop_Img={this.props.shopGoods[1].img}>
                    <div>
                      <CardContent>
                        <input
                          accept="image/*"
                          id="Good2 image"
                          multiple
                          type="file"
                        />
                        <TextField 
                          label = "Good2 name"
                          name = "Good2 name"
                          id = "Good2 name"
                        />
                      </CardContent>
                    </div>
                  </Content>
                  <Content goodName={this.props.shopGoods[2].name}
                           goodPrice={this.props.shopGoods[2].price}
                           shop_Img={this.props.shopGoods[2].img}>
                    <div>
                      <CardContent>
                        <input
                          accept="image/*"
                          id="Good3 image"
                          multiple
                          type="file"
                        />
                        <TextField 
                          label = "Good3 name"
                          name = "Good3 name"
                          id = "Good3 name"
                        />
                      </CardContent>
                    </div>
                  </Content>
                  <Button
                    color="primary" component={RouterLink} to='/dist/Confirm'
                    onClick={(event) => {this.props.onChangeName(event,[{id: 1,
                                                                        name: document.getElementById('Good1 name').value,
                                                                        price: 30,
                                                                        img: './' + document.getElementById('Good1 image').files[0].name,
                                                                        sold_out: false},
                                                                        {id: 2,
                                                                        name: document.getElementById('Good2 name').value,
                                                                        price: 60,
                                                                        img: './' + document.getElementById('Good2 image').files[0].name,
                                                                        sold_out: false},
                                                                        {id: 3,
                                                                        name: document.getElementById('Good3 name').value,
                                                                        price: 90,
                                                                        img: './' + document.getElementById('Good3 image').files[0].name,
                                                                        sold_out: false}]);
                                        this.props.onChangeShop(event,{ id: this.props.shopData.id,
                                                                        name: this.props.shopData.name,
                                                                        state: this.props.shopData.state,
                                                                        img: './' + document.getElementById('Shop image').files[0].name,
                                                                        disc: this.props.shopData.disc,
                                                                        address: this.props.shopData.address,
                                                                        goods: this.props.shopData.goods});
                                        this.props.onSetPage(event,'SellerShopPage');
                                        }}>
                    Change Goods Name
                  </Button>
              </Grid>
              <SellerFooter/>
            </SellerShopContainer>
            
          </div>
        );
    }
}
export default SellerShopPage