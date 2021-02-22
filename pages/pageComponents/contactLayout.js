import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from "assets/components/header";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// Axios function to communicate with Nodemailer to send form
// import { sendContactEmail } from './../networking/mail-api'


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
        flexDirection: 'column',
        height: '100%',
        margin: '0 auto',
        textAlign: 'center',
        '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 400,
            margin: theme.spacing(10),
        },
    },
  },
  formfields: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  formtitle: {
    width: '80%',
    textAlign: 'center',
    margin: '4em auto 1em auto',
  },
  form: {
      fontSize: '7em',
  },
  submit: {
      textAlign: 'center',
      margin: '1em auto 10em auto',
    //   maxHeight: '60px',
      padding: '0.5em 1.4em',
      width: '20%',
  },
}));


export default function ContactLayout() {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>

        <Header />
        <Typography className={classes.formtitle} variant="h5">
            For any questions or if you want to inquire about wholesale orders, send us a message!
                   </Typography>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.formfields}>
                <TextField 
                id="standard-basic" 
                label="First & Last Name"
                className={classes.form}
                autoComplete
                autoFocus={true}
                required
                 />
                <TextField 
                id="standard-basic" 
                label="Example@gmail.com"
                autoComplete
                autoFocus={true}
                required
                />
                <TextField 
                id="standard-multiline-flexible" 
                label="Write your message here"
                autoComplete
                autoFocus={true}
                fullWidth
                multiline
                required
                rowsMax={5}
                value={value}
                onChange={handleChange}
                />
            </div>
            <Button variant="contained" color="primary" className={classes.submit}>
                Send
            </Button>
        </form>
    </ThemeProvider>
    )
}
