import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // With react-router-dom@^6.0.0 use `ref` instead of `innerRef`
          // See https://github.com/ReactTraining/react-router/issues/6056
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
}
  
ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default function SellerSidebar() {
    return (
      <Paper elevation={0}>
        <List aria-label="main mailbox folders">
          <ListItemLink primary='blank'/>
          <ListItemLink to="/dist/SellerHome" primary="Home" icon={<InboxIcon />} />
          <ListItemLink to="/dist/SellerOrderList" primary="Order" icon={<DraftsIcon />} />
          <ListItemLink to="/dist/SellerShop" primary="Shop" icon={<DraftsIcon />} />
          <ListItemLink to="/dist/SellerIncome" primary="Income" icon={<DraftsIcon />} />
        </List>
      </Paper>
    );
}