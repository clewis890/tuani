import clsx from 'clsx';
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";
import NavBarTransition from "./NavBarTransition";
import NavBar from './NavBar';
import Button from '@material-ui/core/Button'
import Parallax from './Parallax';

const Header = props => {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBarTransition
        bgColorBefore={"transparent"}
        bgColorAfter={"#048013"}
        textColorBefore={"#D6E0EB"}
        textColorAfter={"#D6E0EB"}
        fadeIn={"2s ease-in"}
        fadeOut={"0.7s ease-out"}
      >
        <AppBar 
        position="fixed"
        style={{ borderRadius: '50px' }}
        >
          <Toolbar
            style={{ display: 'flex', justifyContent: 'space-between ', width: '96%' }}
          >
            <Typography variant="h5" noWrap>
            <Button
              href="/"
              variant="contained"
              style={{ backgroundColor: "inherit", boxShadow: 'none', borderRadius: '15px' }}
            >
                <h1 
                  style={{ color: '#D6E0EB', marginBlockEnd: '0', marginBlockStart: '0' }} 
                >
                  Tuani
                </h1>
            </Button>
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
      </NavBarTransition>
      <Parallax />
    </ThemeProvider>
  );
};

export default Header;
