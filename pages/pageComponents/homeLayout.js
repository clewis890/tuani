import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import PropTypes from 'prop-types';
import Parallax from '../../assets/components/Parallax'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { createMuiTheme } from '@material-ui/core/styles'
import Header from '../../assets/components/header';
import ButtonBase from '@material-ui/core/ButtonBase';

import { isPropertyAccessExpression } from 'typescript';
import "typeface-cormorant"

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Cormorant',
            'serif',
        ].join(','),
},});



const images = [
      {
        url: "/leather.jpg",
        title: 'Leather',
        width: '30%',
      },
      {
        url: "/textile.jpg",
        title: 'Textile',
        width: '30%',
      },
      {
        url: "/wood.jpg",
        title: 'Wood',
        width: '30%',
      },
];

const imageLinks = () => {
  return (
    <>
      <a href="/leather" />
      <a href="/textile" />
      <a href="/wood" />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Cormorant',
        flexGrow: 1,
        width: '100%',
        margin: '2em auto',
        overflow: 'hidden',
    },
    products: {
      display: 'flex',
      flexWrap: 'wrap',
      // minWidth: 300,
      width: '80%',
      margin: '2em auto',
      justifyContent: 'center',
    },
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        margin: '0 auto',
    },
    paper: {
        fontFamily: 'Cormorant',
        boxShadow: 'none',
        backgroundColor: 'inherit',
        padding: theme.spacing(2),
        textAlign: 'left',
        fontSize: '1.4em',
        lineHeight: '2em',
        opacity: '100%',
        margin: '3em auto',
    },
    title: {
        fontFamily: 'inherit',
        fontSize: '2em',
        padding: '0 2em',
        textAlign: 'center',
        margin: '0 auto 2em auto',
        display: 'flex',
        justifyContent: 'center',
    },
    flag: {
       textAlign: 'center',
    },
    span: {
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 150,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.85,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
}));

export default function HomeLayout() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
          <Header />
        <div className={classes.root}>
            <Grid 
            container 
            className={classes.container}
            >
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <span className={classes.span}>Tuani LLC is born of a desire to create a connection with and empower the people from my home country, Nicaragua.</span> Though my time in Nicaragua has been short, every time I travel there and I get to experience the people and the landscapes, I am amazed by the creativity and mastery of local artisans working on wood, leather, and textiles. These are hard-working people who are trying their best to showcase their passions and share the Nicaraguan culture with the world.
                    </Paper>
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                  
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                   
                   </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                    <Image 
                    src="/flag.png"  
                    width={400} 
                    height={300}
                    />
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                   
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                   
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper} >
                         I realized there was an opportunity to create an easier way for <span className={classes.span}>Nicaraguan artisans</span> to connect with the US market, by fulfilling the need of the North American market for <span className={classes.span}>incentive and appreciation gifts –</span> which many companies see as a way to create, maintain, or strengthen relationships with clients, alumni, or community influencers. I myself struggled from time to time to find a unique way to say thank you – but was at times underwhelmed by the generic options available in the market… who needs another padfolio or USB drive with the logo of their alma mater or their financial advisor, after all.
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                   
                </Grid>
                <Grid item xs={12} md={6}>
                    
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}
                    >So that’s why I founded Tuani LLC… for the Nicaraguan people, <span className={classes.span}>Tuani means “cool” </span>and we believe it’s cool to give back. Our products shows our appreciation for our clients, and it also helps the local artisans that created it. Additionally, an education kit will be donated to a Nicaraguan kid in need on your behalf... because it’s Tuani to be nice! <br />
                     Thank you for partnering with us in this journey!
                    </Paper>
                </Grid>
                {/* <div className={classes.products}> */}
                      
              <div className={classes.products}>
              <h4 
                  style={{  textTransform: 'uppercase', fontSize: '1.3em', margin: '1em auto', width: '80%', textAlign: 'center' }}>
                    Collection</h4>
              {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          href="/leather"
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
            </div>
            </Grid>
       </div>
        </ThemeProvider>
    )
}

