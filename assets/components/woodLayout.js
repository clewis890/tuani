import React from 'react';

// Styles
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { shadows } from '@material-ui/system';

// Default Material UI Components
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

// Custom Built Components
import Products from './woodGrid';
import ProductCard from './productComponents/woodCard'
import ProductHeader from '../../pages/pageComponents/woodHeader'
import HeaderProduct from './headerProduct';
import Header from './header'

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


export default function WoodLayout() {
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
                        >
                            <Typography color="primary" component="div" style={{ margin: '0', padding: '10px', width: '100%', height: '100%'}}>
                                <Products>
                                <ProductCard />
                                </Products>
                            </Typography>
                        </Container>
                    </ThemeProvider>
                </Box>
        </React.Fragment>
    )
}