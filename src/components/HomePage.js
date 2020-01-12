import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Img_Home from './Logo.png';


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

function Header() {
    const classes = useStyles();
    return (
      <div>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <ShopIcon className={classes.icon} />
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Home Page
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Home Page
            </Typography>
          </Container>
        </div>
      </div>
    );
}

const Content = (props) => {
  const classes = useStyles();
  const router = props.router;
  return (
    <Grid style={{height: 500, overflow: 'auto', marginTop: 32, marginLeft: '33%', padding: 20}}>
      <Card className={classes.card}>
        <CardHeader title='Welcome To Distributed Food Selling Platform'/>
        <CardMedia
          className={classes.media}
          image={Img_Home}
          title="HomeImage"
        />
        <CardContent>
          <Button color="primary" component={RouterLink} to={router}>
            Get Started!
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Footer() {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
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
  title: {
      flexGrow: 1,
  },
  toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
  },
}));

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  checkUserType() {
    return this.props.checkUserType();
  }

  render() {
    const router = this.checkUserType();
    return (
      <Container component="main">
        <CssBaseline />
        <Header />
        <Content router={router}/>
        <Footer />
      </Container>
    );
  }
}

export default HomePage