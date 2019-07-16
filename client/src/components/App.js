import React, { Component } from 'react'
import {Provider} from 'react-redux';
import store from '../redux/store/index'
import SwitchNav from './pages/SwitchNav';
import Footer from './pages/footer';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import MenuAppBar from './pages/Navbar';
import * as jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../redux/action/authActions";

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }
export default class App extends Component {
    render() {
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
      });
        return (
            <Provider store={store}>
<Router>
    <div>
<div class="navbar-fixed">
      <nav >
   <div class="nav-wrapper teal lighten-1" >
       <a  class="brand-logo" style={{marginLeft:'40px'}}><Link to={'/'}><img style={{height:'60px'}}src="https://www.freelogodesign.org/file/app/client/thumb/5cc07f4b-8738-4217-a73c-2b1e3c5151b8_200x200.png?1563292458664"></img>Mobily </Link></a>
       <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
       <ul class="right hide-on-med-and-down" style={{ listStyleType:'none'}}>
         <li ><Link to={'/'}>Home</Link></li>
         <li><Link to={'/contact'}>Contact Us</Link></li>
         <li><Link to={'/about'}>About</Link></li>
         <li><Link to={'/cart'}>Cart</Link></li>
        <li><Link to={'/adminn332'}>Admin</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>

       </ul>
     </div>
   </nav> 
   </div>
    <ul class="sidenav" id="mobile-demo">
   <li ><Link to={'/'}>Home</Link></li>
         <li><Link to={'/contact'}>Contact Us</Link></li>
         <li><Link to={'/about'}>About</Link></li>
         <li><Link to={'/cart'}>Cart</Link></li>
        <li><Link to={'/adminn332'}>Admin</Link></li>
        <li><Link to={'/register'}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
  </ul>
          <Switch>
    <SwitchNav/>
          </Switch>
  
  </div>
</Router>
<Footer/>
                </Provider>
        )
    }
}
