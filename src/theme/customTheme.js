import { createTheme } from '@mui/material/styles';

let customTheme = createTheme({
  palette: {
    
    primary: {
      main: '#0069c0',
    },
    secondary: {
      main: '#FF4500',
    },
    text: {
      primary: '#fafafafa',
      secondary: 'black'
    },
    
    status: {
      success: '#49C37D',
      error: '#f9351f'
    }
  },
  typography: {
    allVariants: {
      color: '#fafafa'
    }
  },
  
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 425,
      // recommended when something is leaving screen-
      leavingScreen: 195,
    },
  },
});






export default customTheme;