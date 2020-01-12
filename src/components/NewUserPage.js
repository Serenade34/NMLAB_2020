import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
//import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Img_NewUser from './Logo.png';

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
            New User Page
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            New User Page
          </Typography>
        </Container>
      </div>
    </div>
  );
}

function Content(props) {
  const classes = useStyles();
  return(
    <main>
      <Grid style={{height: 600, overflow: 'auto', marginTop: 32, marginLeft: '33%', marginRight: '33%',padding: 20}}>
        <Card className={classes.card}>
          <CardHeader title='Welcome To FoodShop'/>
          <CardMedia
            className={classes.media}
            image={Img_NewUser}
            title="HomeImage"
          />
          {props.children}
        </Card>
      </Grid>
    </main>
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



class NewUserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
            <CssBaseline />
            <Header />
            <Content>
              <div>

                  <CardContent> 
                    <Typography>Enter Your Name:</Typography>
                    <TextField 
                      label = "name"
                      name = 'name'
                      id = 'name'
                    />
                    <Typography>Enter Your Type(buyer/seller):</Typography>
                    <TextField 
                      label = "type"
                      name = 'type'
                      id = 'type'
                    />
                  </CardContent>
                  <Button
                    color="primary" 
                    onClick={(event) => {this.props.onAddUser(event,{id: this.props.user.id,
                                                                    name: document.getElementById('name').value,
                                                                    type: document.getElementById('type').value,
                                                                    address: this.props.user.address});
                                         this.props.onSetPage(event,'NewUserPage');
                                        }}
                    component={RouterLink} to='/dist/Confirm'>
                    Sign In
                  </Button>

              </div>
            </Content>
            <Footer/>
          </div>
        );
    }
}
export default NewUserPage