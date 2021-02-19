import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from "assets/components/header";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Cormorant',
            'serif',
        ].join(','),

        palette: {
        primary : {
            main: '#481815',
        },
        secondary: {
            main: '#372126',
        },
        error: {
            main: '#193A25',
        },
        info: {
            main: '#2B5F2C',
        },
        success: {
            main: '#47B248',
        },
        black: {
            main: '#010103',
        },
        white: {
            main: '#D6E0EB',
        },
    },
},});


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100%',
        margin: '0 auto',
        textAlign: 'center',
        '& .MuiTextField-root': {
        margin: theme.spacing(10),
        width: 200,
    },
  },
  formtitle: {
    margin: '4em auto 1em auto',
    textAlign: 'center',
  },
  form: {
      fontSize: '7em',
  },
  submit: {
      textAlign: 'center',
      margin: '0 auto 2em auto',
      maxHeight: '60px',
  },
}));


export default function ContactLayout() {
    const classes = useStyles();
    const [value, setValue] = React.useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>

        <Header />
        <Typography className={classes.formtitle} variant="h5">
            Feel free to reach out if you would like to place a wholesale order, or just have any questions!
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField 
                id="standard-basic" 
                label="First & Last Name"
                className={classes.form}
                required
                 />
                <TextField 
                id="standard-basic" 
                label="example@gmail.com"
                required
                />
                <TextField 
                id="standard-multiline-flexible" 
                label="Write your message here"
                multiline
                required
                rowsMax={5}
                value={value}
                onChange={handleChange}
                />
            </div>
            <Button variant="outlined" color="primary" className={classes.submit}>
                Send
            </Button>
        </form>
    </ThemeProvider>
    )
}
