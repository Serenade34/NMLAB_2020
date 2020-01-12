import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function SellerHeader() {
    const classes = useStyles();
    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <ShopIcon className={classes.icon} />
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Seller Page
              </Typography>
            </Toolbar>
        </AppBar>
    );
  }