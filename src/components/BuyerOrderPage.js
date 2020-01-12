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
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
//need to import when using Dashboard structure/////////////
import BuyerHeader from './BuyerHeader.js';
import BuyerSidebar from './BuyerSidebar.js';
import BuyerFooter from './BuyerFooter.js';
import { TextField } from '@material-ui/core';
////////////////////////////////////////////////////////////
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

const BuyerOrderPage = (props) => {
  const user = props.user;
  const shopData = props.shopData;
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-01-15T14:00:00'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return(
    <div className={classes.root}>
      <CssBaseline />
      <BuyerHeader />
      <BuyerSidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography align='center' variant="h3">{shopData.name} Order Page</Typography>
          <Grid style={{height: 500, overflow: 'auto', marginTop: 32, marginLeft: '37%', padding: 20}}>
            {shopData.goods.map(good => (
            <Card className={classes.card}>
              <CardHeader
                title={good.name}
                subheader={'$' + good.price}
              />
              <CardMedia
                className={classes.media}
                image={good.img}
                title={good.name}
              />
              <CardContent>
                <TextField 
                  label = 'num'
                  name = {good.name}
                  id = {good.name}
                  defaultValue = {0}
                />
              </CardContent>
            </Card>
            ))}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container >
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Arrive Date"
                  format="yyyy/MM/dd"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Arrive Time"
                  ampm={false}
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <TextField 
              label = 'Deliver Address'
              name = 'location'
              id = 'location'
            />
            <Typography></Typography>
            <Button
              color="primary"
              onClick={(event) => {props.onOrder(event,{id: props.orderId+1,
                                                        buyer_address: user.address,
                                                        seller_address: shopData.address,
                                                        dueTime: document.getElementById("date-picker-dialog").value .substr(0,4)
                                                                 + document.getElementById("date-picker-dialog").value .substr(5,2)
                                                                 + document.getElementById("date-picker-dialog").value .substr(8,2)
                                                                 + document.getElementById("time-picker").value.substr(0,2)
                                                                 + document.getElementById("time-picker").value.substr(3,2),
                                                        state: 1,
                                                        location: document.getElementById('location').value,
                                                        goods: [parseInt(document.getElementById(shopData.goods[0].name).value),
                                                                parseInt(document.getElementById(shopData.goods[1].name).value),
                                                                parseInt(document.getElementById(shopData.goods[2].name).value)]});
                                  props.onSetPage(event,'BuyerOrderPage');
                                  }}
              component={RouterLink} to='/dist/Confirm'>
              Submit
            </Button>
          </Grid>
          <BuyerFooter />
        </Container>
      </main>
    </div>
  );
}

export default BuyerOrderPage