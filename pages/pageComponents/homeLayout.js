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
import { isPropertyAccessExpression } from 'typescript';

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
        margin: '1em auto 6em auto',
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
            margin: '4em auto',
        },
    },
    paper3: {
        width: '93%',
        padding: theme.spacing(3),
        textAlign: 'center',
        fontSize: '1.2em',
        lineHeight: '2em',
        backgroundColor: '#D6E0EB',
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '1em auto 6em auto',
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
            margin: '4em auto',
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
        margin: '4em auto',
        textAlign: 'center',
        width: 'fit-content',        
        [theme.breakpoints.down('xs')]: {
            margin: '4em auto',
        },
        [theme.breakpoints.down('md')]: {
            margin: '6em auto',
        },
        [theme.breakpoints.up('xl')]: {
            margin: '4em auto 0 auto',
        },
    },
    
}));

function HomeLayout(props) {
    const classes = useStyles();
    const { width } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={5} direction="column">
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        Tuani LLC is born of a desire to create a connection with and empower the people from my home country, Nicaragua. Though my time in Nicaragua has been short, every time I travel there and I get to experience the people and the landscapes, I am amazed by the creativity and mastery of local artisans working on wood, leather, and textiles. These are hard-working people who are trying their best to showcase their passions and share the Nicaraguan culture with the world.
                    </Paper>
                </Grid>
                <Grid className={classes.image} item xs={12} md={6}>
                        <Image 
                        src="/flag.png"  
                        width={400} 
                        height={300}
                        style={{ marginTop: '2rem'}} 
                        />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>I realized there was an opportunity to create an easier way for Nicaraguan artisans to connect with the US market, by fulfilling the need of the North American market for incentive and appreciation gifts – which many companies see as a way to create, maintain, or strengthen relationships with clients, alumni, or community influencers. I myself struggled from time to time to find a unique way to say thank you – but was at times underwhelmed by the generic options available in the market… who needs another padfolio or USB drive with the logo of their alma mater or their financial advisor, after all.</Paper>
                </Grid>
                <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper3}
                    >So that’s why I founded Tuani LLC… for the Nicaraguan people, Tuani means “cool” and we believe it’s cool to give back. Our products shows our appreciation for our clients, and it also helps the local artisans that created it. Additionally, an education kit will be donated to a Nicaraguan kid in need on your behalf... because it’s Tuani to be nice! <br />
                     Thank you for partnering with us in this journey!
                    </Paper>
                </Grid>
            </Grid>
            </Grid>
           
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
        </div>
    )
}

HomeLayout.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(HomeLayout);