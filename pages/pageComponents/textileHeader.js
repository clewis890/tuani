import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing(5),
      fontSize: '1.5rem',
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
        title="Textile Products"
        subheader="Coming soon!"></CardHeader>
        </>
        
    )
}