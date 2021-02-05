import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';






export default function Footer() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#47B248'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" style={{ color: '#010103' }}>
                © 2020 Tuani LLC. All Rights Reserved.
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}