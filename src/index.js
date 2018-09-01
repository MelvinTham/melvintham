import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
import Home from './Home';
import * as firebase from 'firebase';
AOS.init();
const theme = createMuiTheme();
var config = {
    apiKey: "AIzaSyD4HUICv0_TjO5jCMunr2i9Gq7NAcSpU2E",
    authDomain: "melvintham-1721c.firebaseapp.com",
    databaseURL: "https://melvintham-1721c.firebaseio.com",
    projectId: "melvintham-1721c",
    storageBucket: "melvintham-1721c.appspot.com",
    messagingSenderId: "348963629098"
  };
firebase.initializeApp(config);
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <Home />
</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
