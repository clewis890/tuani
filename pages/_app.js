import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import React from 'react';
import Header from '../assets/components/header';
import Footer from '../assets/components/footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <ScopedCssBaseline />
      <Header title="Tuani" />
        <Component {...pageProps} />
        <Footer />
    </React.Fragment>  
  )
}
