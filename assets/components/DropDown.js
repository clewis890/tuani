import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// Icons *****
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const theme = createMuiTheme({
    overrides: {
        MuiListSubheader: {
            text: {
                fontSize: '1.3rem',
                color: '#410312',
            },
        },
    },
});

function ListItemLink(props) {
    return (
    <ListItem button component="a" {...props}>
    </ListItem>
    )
}

export default function DropDown() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)

    const handleClick = () => {
        // setOpen(!open);
        setOpen((prev) => !prev);
    };

    // const handleClickAway = () => {
    //   setOpen(false);
    // };

    return (
        <ThemeProvider theme={theme}>
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Tuani
          </ListSubheader>
        }
        className={classes.root}
      >

        <ListItemLink href="/" button>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink button>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemLink>      
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
          </ListItemIcon>
          {/** Dropdown part of menu */}
          <ListItemText primary="Artesanal Products" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemLink href="/leather" button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Leather" />
            </ListItemLink>
            <ListItemLink href="/textile" button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Textile" />
            </ListItemLink>
            <ListItemLink href="/wood" button className={classes.nested}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Wood" />
            </ListItemLink>
          </List>
        </Collapse>
      </List>
      </ThemeProvider>
    );
}