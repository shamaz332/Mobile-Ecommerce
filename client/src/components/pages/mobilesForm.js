import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { postMobiles, deleteMobiles, getMobiles, resetButton } from '../../redux/action/mobilesAction';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

// import { logoutUser } from "../../redux/action/authActions";
import PropTypes from "prop-types";
import axios from 'axios';

class MobilesForm extends Component {
  constructor() {
    super();
    this.state = {
      images: [{}],
      img: ''
    }
  }
  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };
  componentDidMount() {
    // this.props.getMobiles();
    //GET IMAGES FROM API
    axios.get('/images')
      .then(function (response) {
        this.setState({ images: response.data });
      }.bind(this))
      .catch(function (err) {
        this.setState({ images: 'error loading image files from the server', img: '' })
      }.bind(this))


        console.log(M);
        M.AutoInit();
    
  }
  handleSubmit() {
    const mobile = [{
      model: findDOMNode(this.refs.model).value,
      weight: findDOMNode(this.refs.weight).value,
      os: findDOMNode(this.refs.os).value,
      internalmemory: findDOMNode(this.refs.internalmemory).value,
      ram: findDOMNode(this.refs.ram).value,
      camera: findDOMNode(this.refs.camera).value,
      battery: findDOMNode(this.refs.battery).value,
      color: findDOMNode(this.refs.color).value,
      price: findDOMNode(this.refs.price).value,
    }]
    this.props.postMobiles(mobile);
  }

  onDelete() {
    let mobileId = findDOMNode(this.refs.delete).value;
   if( this.props.deleteMobiles(mobileId)){
    alert('Successfully deleted')
   }
   
  }

  // handleSelect(img) {
  //   this.setState({
  //     img: '/images/' + img
  //   })
  // }

  resetForm() {
    //RESET THE Button
    this.props.resetButton();

    findDOMNode(this.refs.model).value= '';
    findDOMNode(this.refs.weight).value= '';
    findDOMNode(this.refs.os).value= '';
     findDOMNode(this.refs.internalmemory).value= '';
     findDOMNode(this.refs.ram).value= '';
        findDOMNode(this.refs.camera).value= '';
         findDOMNode(this.refs.battery).value= '';
       findDOMNode(this.refs.color).value= '';
        findDOMNode(this.refs.price).value= '';
  }
  render() {
    const mobilesList = this.props.mobiles.map(function(mobilesArr) {
      return (
        <option key={mobilesArr._id}> {mobilesArr._id}</option>
      )
    })
    // const imgList = this.state.images.map(function (imgArr, i) {
    //   return (
    //     <option key={i} eventKey={imgArr.name}
    //       onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</option>
    //   )
    // }, this)
    // const { user } = this.props.auth;
    return (
  

      <div className='container' >
           {/* <div class="card">
              <div class="card-content">
        <div className='row'>
          <div className='col s12'>
         
                <span class="card-title"><h3>Upload Image</h3></span>
                <form ref="image">
               
                  <select >
                    {imgList}
                  </select>

                  </form>

              </div>
            </div>
          </div>
        </div> */}
<div>
{/* <b>Hey there,</b> {user.name.split(" ")[0]} */}

        <div className='row'>
          <div className='col s12'>

            <div class="card">
              <div class="card-content">
                <span class="card-title"><h3>Add Mobiles</h3></span>
                <form>
                  <div class="input-field col s12">
                    <input  type="text" ref="model" />
                    <label for="name">Model</label>
                  </div>
                  <div class="input-field col s12">
                    <input type="text"  ref="weight" />
                    <label for="specification">Weight</label>
                  </div>
                  <div class="input-field col s12">
                    <input type="text"  ref="os" />
                    <label for="specification">OS</label>
                  </div>
                  <div class="input-field col s12">
                    <input type="text"  ref="internalmemory" />
                    <label for="specification">Internal Memory</label>
                  </div>
                  <div class="input-field col s12">
                    <input  type="text"    ref="ram" />
                    <label for="price">Ram</label>
                  </div>
                  <div class="input-field col s12">
                    <input  type="text"    ref="camera" />
                    <label for="price">Camera</label>
                  </div>
                  <div class="input-field col s12">
                    <input  type="text"    ref="battery" />
                    <label for="price">Battery</label>
                  </div>
                  <div class="input-field col s12">
                    <input  type="text"    ref="color" />
                    <label for="price">Color</label>
                  </div>
                  <div class="input-field col s12">
                    <input  type="text"    ref="price" />
                    <label for="price">Price</label>
                  </div>
                </form>
                <button class="btn waves-effect waves-light" 
                onClick={(!this.props.msg)?(this.handleSubmit.bind(this)):(this.resetForm.bind(this))}>
                {(!this.props.msg)?("Save Mobile"):(this.props.msg)}
                
                 
                </button>
              </div></div></div></div>
              
      
          <div className='row'>
          <div className='col s12'>

            <div class="card">
              <div class="card-content">
                <span class="card-title"><h3>Delete Mobiles</h3></span>
                <form >
                
                <select ref='delete' defaultValue="">
                <option value="" disabled >Choose Mobile ID</option>
                {mobilesList}
              </select>
                
            
  </form>
  <button class="btn waves-effect waves-light red" onClick={this.onDelete.bind(this)}>Delete</button>
</div></div>
</div></div>

              </div>
              </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobiles: state.mobiles.mobiles,
    msg: state.mobiles.msg,
  
   
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postMobiles,
    deleteMobiles,
    getMobiles,
    resetButton,

  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobilesForm);
