import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from '@mui/icons-material/Login';

import Login from './Login';
import Ecom from "./Ecom";
import ItemPage from "./lapPage";
import CartPage from "./CartPage";
import Account from  "./ContactUs";



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
    <a href="/">

      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon></a>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
    <a href="/cart">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon></a>
      <ListItemText primary="Cart" />
    </ListItemButton>
    <ListItemButton>
    <a href="/Account">
      <ListItemIcon>
   <AccountCircleIcon  />

      </ListItemIcon>
      </a>
      <ListItemText primary="Account" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LoginIcon/>
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);