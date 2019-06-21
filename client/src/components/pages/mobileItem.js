import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux' 
import {addToCart, updateCart} from '../../redux/action/cartAction';
import 'materialize-css/dist/css/materialize.min.css';
class MobileItem extends Component{

  handleCart(){
    const mobile = [...this.props.cart, {
      _id:this.props._id,
      model:this.props.model,
      weight:this.props.weight,
      os: this.props.os,
      internalmemory: this.props.internalmemory,
      ram: this.props.ram,
      camera: this.props.camera,
      battery: this.props.battery,
      color: this.props.color,
      price:this.props.price,
      quantity:1
    }]

    // CHECK IF CART IS EMPTY
    if(this.props.cart.length > 0) {
      // CART IS NOT EMPTY
      let _id = this.props._id;

      let cartIndex = this.props.cart.findIndex(function(cart){
        return cart._id === _id;
      })
      // IF RETURNS -1 THERE ARE NO ITEMS WITH SAME ID
      if (cartIndex === -1){
        this.props.addToCart(mobile);
      } else {
        // WE NEED TO UPDATE QUANTITY
        this.props.updateCart(_id, 1, this.props.cart);
      }

    } else {
      // CART IS EMPTY
      this.props.addToCart(mobile);
    }

  }
  constructor(){
    super();
    this.state = {
      isClicked:false
    };
  }
  onReadMore(){
    this.setState({isClicked:true})
  }
  render(){
    return(


<div class="card grey lighten-2">
          <div class="card-content">
    <div className='row'>
    <div className="col s4 xs12">
    <img src={this.props.images} className="responsive-img"/> 
    </div>
    <div className="col s8">
    <h6><strong>Model : </strong>{this.props.model}</h6>
    <h6><strong>OS : </strong>{this.props.os}</h6>
    <h6><strong>Ram : </strong>{this.props.ram}</h6>
    <h6><strong>Internal Memory : </strong>{this.props.internalmemory}</h6>
    <h6><strong>Color : </strong>{this.props.color}</h6>
      
            <h6>$ {this.props.price}</h6>
            <button class="btn waves-effect waves-light" onClick={this.handleCart.bind(this)}>Add To Cart
    <i class="material-icons right">send</i>
  </button>
    </div>

        

    </div>
    </div></div>






    )
  }
}
function mapStateToProps(state){
  return{
    cart:state.cart.cart
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addToCart:addToCart,
    updateCart:updateCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobileItem);
