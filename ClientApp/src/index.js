import { ThemeProvider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme } from './assets/Styles';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  rootElement);

registerServiceWorker();

