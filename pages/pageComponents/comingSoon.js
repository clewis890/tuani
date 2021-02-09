import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image'
import Parallax from '../../assets/components/Parallax'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import WarningIcon from '@material-ui/icons/Warning';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '90%',
        margin: '2em auto'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 1rem',
        boxShadow: 'none',
        color: '#481815',
        textTransform: 'uppercase',
    },
    tuani: {
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.down('xs')]: {
            width:'70%',
            height: '70%',
        },
        [theme.breakpoints.down('md')]: {
            width:'85%',
            height: '85%',
        },
    },
    warning: {
        fontSize: '2rem',
        color: '#903921',
        margin: '0 1rem',
    },
}));


export default function ComingSoon() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container 
            spacing={2}
            justify="center"
            >
                <Paper>
                <Card className={classes.card}>
                    <CardMedia 
                    component="img"
                    alt="Wood"
                    height="500"
                    image="/Tuani.jpg"
                    title="Wood Products"
                    className={classes.tuani}
                    />
                    <CardContent style={{ width: '50%', margin: '0 auto' }}>
                        <Typography
                        variant="h1>"
                        component="h2"
                        style={{ display: 'flex', justifyContent: 'space-around' }}
                        > 
                            <ReportProblemIcon
                            className={classes.warning}
                            >Warning
                            </ReportProblemIcon>
                            Under Construction!
                            <ReportProblemIcon
                            className={classes.warning}
                            >Warning
                            </ReportProblemIcon>
                        </Typography>
                    </CardContent>
                </Card>
                </Paper>
           </Grid>
        </div>
    )  
}
