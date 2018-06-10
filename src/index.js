import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";

AOS.init();
const theme = createMuiTheme();
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <Home />
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
