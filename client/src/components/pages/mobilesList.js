import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {Carousel}  from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/carousel.css'
import {getMobiles} from '../../redux/action/mobilesAction';

import MobileItem from './mobileItem';
import Cart from './cart';


class MobilesList extends Component{
  componentDidMount(){
    this.props.getMobiles()
  }
  render(){
    const mobilesList = this.props.mobiles.map(function(mobilesArr){
      return(
        <div className='col xs12 s6 m4' key={mobilesArr._id}>
          <MobileItem
                _id= {mobilesArr._id}
                model={mobilesArr.model}
                weight={mobilesArr.weight}
                internalmemory={mobilesArr.internalmemory}
                ram={mobilesArr.ram}
                camera={mobilesArr.camera}
                battery={mobilesArr.battery}
                color={mobilesArr.color}
                price={mobilesArr.price}/>
        </div> 
            )
    })
    return(
        <div>
<div className='row'>
<Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
<div>
            <img src="" />
                   
            </div>
            <div>
            <img src="" />
                    <p className="legend">Apple</p>
            </div>
            <div>
            <img src="" />
                    <p className="legend">Samsung</p>
            </div>
           
           

          </Carousel>
</div>
          {/* <div className='row'>
            <Cart />
          </div> */}
          <div className='row' style={{marginTop:'15px'}}>
              {mobilesList}
          </div>
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    mobiles: state.mobiles.mobiles,

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getMobiles:getMobiles
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobilesList);
