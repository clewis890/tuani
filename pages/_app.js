import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import React from 'react';
import Footer from '../assets/components/footer';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      
      <ScopedCssBaseline />
      {/* <Header title="Tuani" /> */}
        <Component 
        {...pageProps}
        style={{

        }}
        />
        <Footer />
    </React.Fragment>  
  );
};
