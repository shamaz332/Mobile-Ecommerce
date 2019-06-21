import React, { Component } from 'react'
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from '../redux/store/index'
import Navbar from './navbar';
import Footer from './pages/footer';
import MobilesForm from '../components/pages/mobilesForm';
import MobilesList from '../components/pages/mobilesList';
import Cart from '../components/pages/cart';
import Contact from '../components/pages/contact';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import About from '../components/pages/about';
import Login from '../components/security/login';
import Register from '../components/security/register';
import 'materialize-css/dist/css/materialize.min.css';
import * as jwt_decode from 'jwt-decode';
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../redux/action/authActions";
import PrivateRoute from "../components/security/PrivateRoute";

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
        return (
            <Provider store={store}>
<Router>
    <div>
        <nav >
    <div class="nav-wrapper teal lighten-1" >
      <a  class="brand-logo" style={{marginLeft:'40px'}}><Link to={'/'}>Mobily</Link></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
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

  <ul class="sidenav" id="mobile-demo">
  <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/cart'}>Cart</Link></li>
        {/* <Link to={'/admin'}>Admin</Link> */}
        <li><Link to={'/register'}>Register</Link></li>
       <li><Link to={'/login'}>Login</Link></li>
  </ul>
  <Switch>
              <Route exact path='/' component={MobilesList} />
              <Route exact path='/contact' component={Contact} />
              <Route  exact path='/about' component={About} />
              
              <Route exact path="/adminn332" component={MobilesForm} />
              <PrivateRoute exact path='/cart' component={Cart} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />

          </Switch>
  
  </div>
</Router>
<Footer/>
                </Provider>
        )
    }
}
