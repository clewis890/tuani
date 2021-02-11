import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import { isPropertyAccessExpression } from 'typescript';
import "typeface-cormorant"

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Cormorant',
            'serif',
        ].join(','),
    },});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: '2em auto',
    },
    container: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    paper: {
        // fontFamily: 'Righteous, cursive',
        fontFamily: 'Cormorant',
        boxShadow: 'none',
        backgroundColor: 'inherit',
        padding: theme.spacing(2),
        textAlign: 'center',
        fontSize: '1.4em',
        lineHeight: '2em',
        opacity: '100%',
        margin: '3em auto',
    },
    title: {
        fontSize: '2em',
        padding: '0 2em',
        textAlign: 'center',
        margin: '1em auto',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
       textAlign: 'center',
    },
    span: {
        fontWeight: '700',
        textTransform: 'uppercase',
    },
}));

export default function HomeLayout() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            {/** This is the product preview card on home page.
 * 3 segments. Leather, Textile, Wood. Make hover effect
 * with a button that appears to navigate to individual product pages
 */}
            {/* <Grid 
            container 
            direction="row"
            justify="center"
            item="true"
            spacing={4}
            >
                <Grid item xs={12} md={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">Products</Typography>
                        <Card md={3}>
                                <CardMedia
                                    component="img"
                                    alt="Leather"
                                    height="140"
                                    image=""
                                    title="Leather Products"
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Leather Items
                                        </Typography>
                                    </CardContent>
                        </Card>
                        <Card md={3}>
                                <CardMedia
                                    component="img"
                                    alt="Textile"
                                    height="140"
                                    image=""
                                    title="Textile Products"
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Textile Items
                                        </Typography>
                                    </CardContent>
                        </Card>
                        <Card md={3}>
                                <CardMedia
                                    component="img"
                                    alt="Wood"
                                    height="140"
                                    image=""
                                    title="Wood Products"
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2">
                                            Wood Items
                                        </Typography>
                                    </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid> */}
            <Grid 
            container 
            spacing={10} 
            className={classes.container}
            // direction="column"
            >
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <span className={classes.span}>Tuani LLC is born of a desire to create a connection with and empower the people from my home country, Nicaragua.</span> Though my time in Nicaragua has been short, every time I travel there and I get to experience the people and the landscapes, I am amazed by the creativity and mastery of local artisans working on wood, leather, and textiles. These are hard-working people who are trying their best to showcase their passions and share the Nicaraguan culture with the world.
                    </Paper>
                </Grid>
                <Grid item className={classes.image} xs={12} md={6}>
                  
                </Grid>
                <Grid item className={classes.image} xs={12} md={6}>
                   
                   </Grid>
                <Grid item className={classes.image} xs={12} md={6}>
                    <Image 
                    src="/flag.png"  
                    width={400} 
                    height={300}
                    />
                </Grid>
                <Grid item className={classes.image} xs={12} md={6}>
                   
                </Grid>
                <Grid item className={classes.image} xs={12} md={6}>
                   
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
            </Grid>
        </div>
        </ThemeProvider>
    )
}

