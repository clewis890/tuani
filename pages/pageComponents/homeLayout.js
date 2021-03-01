import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles'
import Header from '../../assets/components/header';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tuanipattern from '../../public/patterntuani.png'

// unused imports
import PropTypes from 'prop-types';
import Parallax from '../../assets/components/Parallax'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { isPropertyAccessExpression } from 'typescript';

import "typeface-cormorant"

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Cormorant',
            'serif',
        ].join(','),
},});

const pattern = [
  {
      url: "/patterntuani.png",
      width: '100%',
      height: '100%',
      background: 'no-repeat cover',
  }
]

const images = [
      {
        url: "/leather.jpg",
        title: 'Leather Coming Soon!',
        width: '30%',
      },
      {
        url: "/textile.jpg",
        title: 'Textile Coming Soon!',
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
        margin: '0 auto',
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
    tuaniwatermark: {
      height: '500px',
      zIndex: '0',
    },
    container: {
        zIndex: '1',
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
          opacity: 0.65,
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
      opacity: 0.3,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      fontSize: '1.3rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.1rem',
      },
      display: 'flex',
      width: '73%',
      justifyContent: 'center',
      textAlign: 'center',
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
        <div 
        className={classes.root}
        style={{ backgroundImage: `url(${Tuanipattern})` }}
        >
          <Grid 
            container 
            className={classes.container}
            >
                <Grid item xs={12} md={6}>
                {/* <Image 
          className={classes.tuaniwatermark}
          src="/images/patterntuani.png"
          alt="Pattern watermark background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          /> */}
                    <Paper className={classes.paper}>
                        <p className={classes.openingparagraph}>
                        For the Nicaraguan people, Tuani means “cool”  and we believe it’s cool to give back. <br />
                        </p>
                        <p className={classes.openingparagraph}>
                        The idea is simple: to connect talented artisans with a market for their products in the USA - while paying a fair wage AND with every unit sold, donating an education kit to a child in need - because, education!<br /> 
                        </p>
                        <p className={classes.openingparagraph}>
                        Nicaragua is an amazing country! Everytime we visit, we are inspired by the creativity and mastery of local artisans working on wood, leather, and textiles.  These are hard-working people who are trying their best to showcase their passions and share the Nicaraguan culture with the world. <br />   
                        </p>
                    </Paper>
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                    {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                   {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                    <Image 
                    src="/flag.png"  
                    width={400} 
                    height={300}
                    />
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                   {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item className={classes.flag} xs={12} md={6}>
                    {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                    Trying to give it a different “twist” Tuani is starting with a line of beautiful and unique wood products that organizations and businesses can use as incentive and appreciation gifts – which many companies see as a way to create, maintain, or strengthen relationships with clients, alumni, or community influencers.  I myself struggled from time to time to find a unique way to say thank you – but was at times underwhelmed by the generic options available in the market… Who needs another padfolio or USB drive with the logo of their alma mater or their financial advisor, after all.
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item xs={12} md={6}>
                    {/** Empty Grid item to facilitate spacing */}
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}
                    >So that’s why we founded Tuani LLC.  Our products show appreciation for those that are important to you - the receivers will love the thoughtful and unique gifts while a child in need will benefit from an education kit donated on the receiver’s behalf...  because it’s Tuani to be nice!  
                     Thank you for partnering with us in this journey!
                     <br />** Stayed tuned for our first donation of education kits on Summer 2021 once international travel is normalized.                    </Paper>
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

