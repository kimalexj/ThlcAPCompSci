import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DrawerLeft from './LeftDrawer';
import Footer from './Footer';
import Home from './screens/Home';
import Today from './screens/Today';

const TABS = ['Home', 'Today', 'Calendar', 'Resources', 'Contact'];

export default function MainPage() {
  const [currentScreen, changeCurrentScreen] = React.useState('Home');

  const getScreenContent = () => {
    switch(currentScreen) {
      case 'Home':
        return <Home />;
      case 'Today':
        return <Today />;
      default:
        return <Today />;
    }
  }

  const screen = getScreenContent();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <DrawerLeft updateScreen={changeCurrentScreen} tabs={TABS}/>
        <Typography variant="h5" component="h2" gutterBottom>
          {currentScreen}
        </Typography>
        <br />
        {screen}
      </Container>
      <Footer />
    </Box>
  );
}