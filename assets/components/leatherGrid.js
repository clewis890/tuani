import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LeatherCard from './productComponents/leatherCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    paper: {
        // padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        elevation: 0,
    },
}));

export default function LeatherGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} >
                    <Paper className={classes.paper}>
                    <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <LeatherCard />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}