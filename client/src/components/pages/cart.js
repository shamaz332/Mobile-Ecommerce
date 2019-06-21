import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import M from "materialize-css";
import 'materialize-css';
import PropTypes from "prop-types";
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
import {deleteCartItem, updateCart, getCart} from '../../redux/action/cartAction';

import { logoutUser } from "../../redux/action/authActions";
class Cart extends Component{
  state = {
    open: false,
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


   
  componentDidMount(){
    this.props.getCart();
  }
  onDelete(_id){
    // Create a copy of the current array of mobiles
    const currentMobileToDelete = this.props.cart;
    // Determine at which index in mobiles array is the mobile to be deleted
    const indexToDelete = currentMobileToDelete.findIndex(
      function(cart){
        return cart._id === _id;
      }
    )
    //use slice to remove the mobile at the specified index
    let cartAfterDelete = [...currentMobileToDelete.slice(0, indexToDelete), ...currentMobileToDelete.slice(indexToDelete + 1)]

    this.props.deleteCartItem(cartAfterDelete);
  }
  onIncrement(_id){
    this.props.updateCart(_id, 1, this.props.cart);
  }
  onDecrement(_id, quantity){
    if(quantity > 1){
      this.props.updateCart(_id, -1, this.props.cart);
    }
  }


  render(){
    if(this.props.cart[0]){
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
  renderEmpty(){
    return(<div></div>)
  }

  renderCart(){
    const cartItemsList = this.props.cart.map(function(cartArr){
      return(
        <div key={cartArr._id}>
        
          <div className='row'>
            < div className='col s4 xs12'>
              <h6>{cartArr.model}</h6><span>    </span>
           </ div>
           < div className='col s2 xs12'>
              <h6>usd. {cartArr.price}</h6>
              </div>
              < div className='col s2 xs12'>
              <h6>qty. {cartArr.quantity}</h6>
           </ div>
           < div className='col s4 xs6'>

           <div style={{padding:'5px'}}>
  <div class="btn-group" role="group">
    <a class="btn" onClick={this.onDecrement.bind(this, cartArr._id, cartArr.quantity)}>-</a>
    <a class="btn" onClick={this.onIncrement.bind(this, cartArr._id)}>+</a>
    <span>     </span>
    <a class="btn red" onClick={this.onDelete.bind(this, cartArr._id)}>Delete</a>
  </div>
</div>
           </ div>
         </div>
      </div>
      )
    }, this)
    const { user } = this.props.auth;
    return(
<div>
<b>Welcome to our shop</b> {user.name.split(" ")[0]}
<div class="card">
          <div class="card-content">
            <span class="card-title"><h3>Your Cart</h3></span>
{cartItemsList}
<div className='row'>
    <div className='col xs12 s12'>
    <h6>Total amount: {this.props.totalAmount}</h6>
   <button class="btn waves-effect waves-light" >Proceed to checkout</button>
    </div>
</div></div></div>
<button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
</div>
    )
  }
}
Cart.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
function mapStateToProps(state){
  return{
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    deleteCartItem:deleteCartItem,
    updateCart:updateCart,
    getCart:getCart,
    logoutUser: logoutUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
