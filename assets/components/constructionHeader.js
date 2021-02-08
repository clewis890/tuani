import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function ConstructionHeader() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#47B248'}}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography variant="body1" style={{ textTransform: 'uppercase', width: '100%', color: '#010103', textAlign: 'center' }}>
                Hang tight, Tuani is coming soon!
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
