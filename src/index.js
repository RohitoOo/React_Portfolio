import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDcS8kEFrH5bLL5R3G9JEzsd73DVAE0-Sk",
  authDomain: "reactingrohito.firebaseapp.com",
  databaseURL: "https://reactingrohito.firebaseio.com",
  projectId: "reactingrohito",
  storageBucket: "reactingrohito.appspot.com",
  messagingSenderId: "650019747039"
};
firebase.initializeApp(config);

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
