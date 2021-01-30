
import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Person, CreditCard, Search, GetApp } from '@material-ui/icons';
import { homeStyles } from './styles'
import InsuranceForm from '../../pages/Insurance';
import InsuranceTemplate from '../../Components/InsuranceTemplate'
import { useContextState } from 'dynamic-context-provider'
import PrintTemplate from '../../Components/PrintInsurance'
import ReactToPrint from 'react-to-print';
import { Button } from '@material-ui/core';
import VinLookup from '../VinLookup'

const Home = () => {
  const { updateContextState, insurance } = useContextState()
  const classes = homeStyles();
  const [open, setOpen] = useState(false);
  const [page, setpage] = useState(0)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Insurance Generator (Educational Use Only)
              </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Account', 'Insurance Card', 'Vin Lookup', 'Download'].map((text, index) => {
            function handleClick() {
              if (index === 3) {
                return updateContextState({
                  dialog: {
                    open: true,
                    title: () => {
                      return (
                        <ReactToPrint
                              trigger={() => {
                                return <Button>Print here</Button>;
                              }}
                              content={() => document.getElementById(`${insurance}Insurance`)}
                            />
                      )
                    },
                    style: { width: '100vw', height: '100vw' },
                    content: () => <PrintTemplate />,
                  }
                })
              }
              setpage(index)
            }
            const iconMap = {
              0: <Person />,
              1: <CreditCard />,
              2: <Search />,
              3: <GetApp />,
            }
            return (
              <ListItem style={index === page ? { background: 'gainsboro' } : {}} onClick={handleClick} button key={text}>
                <ListItemIcon>
                  {
                    iconMap[index]
                  }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          }
          )}
        </List>

      </Drawer>
      <main className={classes.content}>
        {page === 0 && <InsuranceForm />}
        {page === 1 && <InsuranceTemplate />}
        {page === 2 && <VinLookup />}
        {page === 3 && <div />}

      </main>
    </div>
  );
}

export default Home
