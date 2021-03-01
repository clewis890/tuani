import React from 'react';
import clsx from 'clsx';
// import Link from 'next/link'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import MailIcon from '@material-ui/icons/Mail';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Image from 'next/image'
import DropDown from '../components/DropDown'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// import Button from '@material-ui/core/Button'

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'transparent',
    marginBottom: '40',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: '1em 0.03em',
    padding: '0 6px',
    color: '#048013',
    backgroundColor: '#372126',
    border: '1px solid',
    borderColor: 'transparent',
    '&:hover': {
        // backgroundColor: '#481815',
        backgroundColor: 'inherit',
    },
    '&:active': {
      // Testing out a more neutral home page link
      backgroundColor: 'inherit',
      // ????
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginRight: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: '#481815',
    height: 'fit-content',
    borderRadius: '0 0 0 8px',
    padding: '0 0 20px 0',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  header: {
    margin: '0 auto',
    width: '100%',
    height: '80vh',
    color: theme.palette.text.info,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  //   backgroundImage: 'url(/Tuani.jpg)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundAttachment: 'relative',
  //   backgroundPosition: 'center center',
  //   backgroundSize: '50%',
  //   [theme.breakpoints.down('xs')]: {
  //       backgroundSize: '70%',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //       backgroundSize: '50%',
  //   },
  //   [theme.breakpoints.up('xl')]: {
  //       backgroundSize: '30%',
  //   },
    },
  toolbartitle: {
      fontFamily: 'Cormorant',
      fontWeight: '700',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  menuicon: {
    fontSize: '1.7rem',
  },
}));


export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [state, setState] = React.useState(null)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const toggleDrawer = ( open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, open });
  // };

  
  return (
    <div className={classes.root}>
      <CssBaseline />
{/* Header with sidebar menu start */}
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h2" noWrap className={classes.title}>
              <Button
              href="/"
              variant="outlined"
              className={classes.button}>
                <h1 
                style={{ marginBlockEnd: '0', marginBlockStart: '0' }} 
                className={classes.toolbartitle}
                >
                    Tuani
                </h1>
            </Button>
          </Typography> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            onKeyDown={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon className={classes.menuicon}/>
          </IconButton>
        {/* </Toolbar>
      </AppBar> */}
        {/* Sidebar opens to right side - and stays persistent */}
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={open}
        onEscapeKeyDown={handleDrawerClose}
        // onBackDropClick={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <AddIcon /> : <CloseIcon />}
          </IconButton>
        </div>
        {/* <Typography variant="h4">Tuani</Typography> */}
        <Divider />
        <Divider />
        {/** Imported custom menu with expandable component */}
        <DropDown />
      </Drawer>
    </div>
  );
}

