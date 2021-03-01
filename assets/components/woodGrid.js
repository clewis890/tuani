import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WoodCard from './productComponents/woodCard';
import BottleCard from './productComponents/BottleCard';
import DeskBowl from './productComponents/DeskBowl';
import DeskCalendar from './productComponents/DeskCalendar';
import Pencil from './productComponents/Pencil';
import CheeseBoard from './productComponents/Cheeseboard';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        elevation: -1,
    },
}));

export default function WoodGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <Paper className={classes.paper}>
                    <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                    <BottleCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <DeskCalendar />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <DeskBowl />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                    <Pencil />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                    <CheeseBoard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className={classes.paper}>
                        <WoodCard />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}