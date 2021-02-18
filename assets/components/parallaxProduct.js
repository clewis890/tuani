import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// Unused imports??
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
    content: {
      padding: '0',
    },
    text: {
        width: 'fit-content',
      zIndex: '999',
      position: 'absolute',
      top: '50%',
      left: '60%',
      transform: 'translate(-60%, -50%)',
        [theme.breakpoints.down('xs')]: {
            transform: 'translate(-50%, -50%)',
        },
      color: '#D6E0EB',
      fontFamily: 'Cantata One, serif',
      fontSize: '2em',
      fontWeight: '100',
      letterSpacing: '8px',
      textDecoration: 'underline',
    },
}));

export default function ParallaxProduct() {
  const classes = useStyles();

  return (
    <>
    <Card 
    style={{  
    position: 'relative',
    width: '100%',
    height: '75vh',
    margin: '0 auto',
    padding: '0',
    borderRadius: '0',
    backgroundColor: '#372126',
    boxShadow: 'none'
    }}
    className="page-header header-filter clear-filter"
    data-parallax="true"
    // className={classes.root} 
    overflow="hidden">
      {/* <CardContent
        overflow="hidden"
        className={classes.content}
      > */}
        <h2
        className={classes.text}
        >
            Tuani Artesanal Collections
        </h2>
    </Card>
    </>
  )
}

