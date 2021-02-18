import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Products from './textileGrid';
import ProductCard from './productComponents/textileCard'
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box'
import ProductHeader from '../../pages/pageComponents/textileHeader'
import HeaderProduct from './headerProduct';

const theme = createMuiTheme({
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
});


export default function TextileLayout() {
    return (
        <React.Fragment >
            <HeaderProduct />
            <CssBaseline />
                <Box 
                    boxShadow={12}
                    borderRadius="15px"
                    m={10, 2}
                    p={50, 2, 10, 2}
                    style={{ backgroundColor: '#D6E0EB', height: '100%', marginTop: '110px', marginBottom: '100px' }}
                >       
                <ProductHeader />                
                    <ThemeProvider theme={theme}>
                        <Container  
                        maxWidth="lg"
                        maxHeight="lg"
                        >
                            <Typography color="primary" component="div" style={{ margin: '0', padding: '10px', width: '100%', height: '100%'}}>
                                {/* <Products>
                                <ProductCard />
                                </Products> */}
                            </Typography>
                        </Container>
                    </ThemeProvider>
                </Box>
        </React.Fragment>
    )
}