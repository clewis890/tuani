import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import Parallax from '../../assets/components/Parallax'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: '2em auto'
    },
    container: {
        padding: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        fontSize: '1.2em',
        lineHeight: '2em',
        backgroundColor: '#D6E0EB',
        margin: '1em auto 15em auto',
        [theme.breakpoints.down('xs')]: {
            margin:' 3em auto',
        },
        [theme.breakpoints.down('md')]: {
            margin:' 3em auto',
        },
        // [theme.breakpoints.up('lg')]: {
        //     margin:' 5em auto',
        // },
        [theme.breakpoints.up('xl')]: {
            margin: '10em auto',
        },
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
        margin: '10em auto',
        textAlign: 'center',
        width: 'fit-content',        
        [theme.breakpoints.down('xs')]: {
            margin: '5em auto',
        },
        [theme.breakpoints.down('md')]: {
            margin: '10em auto',
        },
        [theme.breakpoints.up('xl')]: {
            margin: '5em auto 0 auto',
        },
    },
}));

export default function HomeLayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Parallax /> */}
            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>Tuani LLC is born of a desire to create a connection with and empower the people from my home country, Nicaragua. Though my time in Nicaragua has been short, every time I travel there and I get to experience the people and the landscapes, I am amazed by the creativity and mastery of local artisans working on wood, leather, and textiles. These are hard-working people who are trying their best to showcase their passions and share the Nicaraguan culture with the world.</Paper>
                </Grid>
                <Grid className={classes.image} item xs={12} md={6}>
                    <Image src="/coast.jpg" alt=" " width={400} height={300} />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid className={classes.image} item xs={12} md={6}>
                    <Image src="/statue.jpg" alt="" width={400} height={300} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>I realized there was an opportunity to create an easier way for Nicaraguan artisans to connect with the US market, by fulfilling the need of the North American market for incentive and appreciation gifts – which many companies see as a way to create, maintain, or strengthen relationships with clients, alumni, or community influencers. I myself struggled from time to time to find a unique way to say thank you – but was at times underwhelmed by the generic options available in the market… who needs another padfolio or USB drive with the logo of their alma mater or their financial advisor, after all.</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>So that’s why I founded Tuani LLC… for the Nicaraguan people, Tuani means “cool” and we believe it’s cool to give back. Our products shows our appreciation for our clients, and it also helps the local artisans that created it. Additionally, an education kit will be donated to a Nicaraguan kid in need on your behalf... because it’s Tuani to be nice!</Paper>
                </Grid>
                <Grid className={classes.image} item xs={12} md={6}>
                        <Image 
                        style={{ boxShadow: '1px 2px 5px rgba(0 0 0 0 0.04)'}}
                        src="/flag.png"  
                        width={400} 
                        height={300} 
                        />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} style={{ margin: '0 auto' }}>
                    <Paper className={classes.paper}>
                        <p className="main__paragraph4">
                        Thank you for partnering with us in this journey!
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}