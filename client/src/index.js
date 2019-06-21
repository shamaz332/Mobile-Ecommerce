import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom'
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//We import the configure store function that handles creating the store for us.


//When it is imported we call it to create the actual store based on our reducers. This is also
//so we don't have to import our reducers in this file.
;

const mountPoint = document.getElementById('root')

//Provider makes so that every connected container component
//gets access to the store, you have to create the store based
//on your store configuration the pass it along to the providers
ReactDOM.render(
  <App />
  
 ,
  mountPoint
);
