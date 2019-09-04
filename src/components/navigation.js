import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Tabs, Tab, Box} from '@material-ui/core';
import Home from './home';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


    const setValue = 1;
    const value = 1;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

class Navigation extends Component
{

    handleChange(event, newValue) {
        setValue(newValue);
    }
    render() {
        return (
            <Router>
              <AppBar position="static">
                <Toolbar>
                  <Tabs
                      variant="fullWidth"
                      value={value}
                      onChange={this.handleChange}
                      aria-label="nav tabs example"
                    >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                </Toolbar>
              </AppBar>
                <TabPanel value={value} index={0}>
                Page One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Page Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Page Three
              </TabPanel>
              <Route path="/" component={Home} />
            </Router>
        )
    }

}

export default  Navigation;
