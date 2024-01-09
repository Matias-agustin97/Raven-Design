import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import SourceCodePro from "./assets/fonts/sourcecodepro/SourceCodePro.ttf";
import Oxanium from "./assets/fonts/oxanium/Oxanium.ttf";
import {Provider} from "react-redux"
import store from './store.js'


const theme = createTheme({
  typography:{
    fontFamily:" SourceCodePro,Oxanium"
  },
  palette:{
    primary:{
      main:"#240f52"
    },
    secondary:{
      main:"#240f52"
    },
    info:{
      main:"#643904"
    }
  },
  components:{
   MuiCssBaseline:{
    styleOverrides: `
    @font-face {
      font-family: 'Oxanium';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Raleway'), local('Raleway-Regular'), url(${Oxanium}) format('woff2');
      unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    }
    @font-face {
      font-family: 'SourceCodePro';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src: local('Raleway'), local('Raleway-Regular'), url(${SourceCodePro}) format('woff2');
      unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    }
  `
   }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
