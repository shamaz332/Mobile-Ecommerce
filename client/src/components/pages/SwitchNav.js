import React, { Component } from 'react'
import MobilesForm from './mobilesForm';
import MobilesList from './mobilesList';
import Cart from './cart';
import Contact from './contact';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import About from './about';
import Login from '../security/login';
import Register from '../security/register';
import PrivateRoute from "../security/PrivateRoute";
export default class SwitchNav extends Component {
    render() {
        return (
            <div>
                 <Route exact path='/' component={MobilesList} />
              <Route exact path='/contact' component={Contact} />
              <Route  exact path='/about' component={About} />
              
              <Route exact path="/adminn332" component={MobilesForm} />
              <PrivateRoute exact path='/cart' component={Cart} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </div>
        )
    }
}
