import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing(3),
      fontSize: '1.5rem',
      color: '#372126',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.7rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.9rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2rem',
      },
    },
}));

export default function ProductTitle() {
    const classes = useStyles();

    return (
       <>
        <CardHeader
        className={classes.root}
        title="Handmade Wood Collection"
        subheader="Our line of wood products are both functional and beautiful. Produced with legal, ethically obtained, and sustainably harvested wood, we offer a line of beautiful and unique gifts for you to make a lasting impression – with a protective finish and a sophisticated laser engraving… all put together in handmade bag produced by a group of in-need seamstress who get helped by the opportunity to put these bags together. As always, one education kit will be donated on behalf of the final recipient, to a child in need for every unit gifted."></CardHeader>
  </>
    )
}