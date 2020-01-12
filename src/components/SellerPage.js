import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Img_SellerHome from './uberEats.png';
//import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const SellerPage = (props) => {
  const user = props.user;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <ShopIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          {user.name}'s {user.type[0].toUpperCase() + user.type.substr(1,user.type.length)} Page
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            {user.name}'s {user.type[0].toUpperCase() + user.type.substr(1,user.type.length)} Page
          </Typography>
        </Container>
      </div>
      <div>
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
              image={Img_SellerHome}
              title="FoodShop"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Hi {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Welcome to FoodShop
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                You are the No.{user.id} user of FoodShop
              </Typography>
              <Container align='center' style={{paddingTop: 20}}>
                <Button aria-controls="simple-menu" aria-haspopup="true" 
                        variant="contained" color="primary"
                        onClick={handleClick}>
                  Open Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Container>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </main>
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  </React.Fragment>
  );
}

export default SellerPage