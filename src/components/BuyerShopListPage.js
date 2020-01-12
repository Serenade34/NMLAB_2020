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
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
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

const BuyerShopListPage = (props) => {
  const shops = props.shopsData;
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
            {shops.map(shop => (
                <Card className={classes.card}>
                    <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                        {shop.name[0]}
                        </Avatar>
                    }   
                    title={shop.name}
                    //subheader={'now ' + shop.state}
                    />
                    <CardMedia
                    className={classes.media}
                    image={shop.img}
                    title={shop.name}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {shop.disc}
                        </Typography>
                        <Button color="primary" component={RouterLink} to="/dist/BuyerOrder"
                                onClick={(event) => {props.onView(event,shop.id);
                                                     props.onSetShop(event,shop.address);
                                                    }}>
                            Order
                        </Button>
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

export default BuyerShopListPage