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
import Img_SellerHome from './Logo.png';
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

const SellerHomePage = (props) => {
  const user = props.user;
  const shopData = props.shopData;
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
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {user.name[0]}
                  </Avatar>
                }
                title={user.name}
                subheader={user.type}
              />
              <CardMedia
                className={classes.media}
                image={shopData.img}
                title="FoodShop"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Hi {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Welcome to Distributed Food Selling Platform
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You are the No.{user.id} user of this platform
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <SellerFooter />
        </Container>
      </main>
    </div>
  );
}

export default SellerHomePage