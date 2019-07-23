import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {Carousel}  from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/carousel.css'
import {getMobiles} from '../../redux/action/mobilesAction';

import MobileItem from './mobileItem';



class MobilesList extends Component{
  componentDidMount(){
    this.props.getMobiles()
  }
  render(){
    const mobilesList = this.props.mobiles.map(function(mobilesArr){
      return(
        <div className='col l4 xs12 s12 m4' key={mobilesArr._id}>
          <MobileItem
                _id= {mobilesArr._id}
                model={mobilesArr.model}
                weight={mobilesArr.weight}
                os={mobilesArr.os}
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
            <img src="https://images.wallpaperscraft.com/image/samsung_galaxy_logo_105553_1280x1024.jpg" alt="mobile" />
            <p className="legend">Samsung</p>
            </div>
            <div>
            <img src="http://desktop-backgrounds-org.s3.amazonaws.com/1280x1024/apple-iphone-5s-cell-phone_3.jpg" alt="mobile"/>
                    <p className="legend">Apple</p>
            </div>
            <div>
            <img src="https://cdn.vox-cdn.com/thumbor/nWjiPR-hSCy1_WXvFxr6pAjZYYY=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/61520647/jbareham_180424_2499_0007.0.jpg"alt="mobile" />
            <p className="legend">Apple</p>
            </div>
            <div>
            <img src="http://desktop-backgrounds-org.s3.amazonaws.com/1280x1024/huawei-honor-6-cell-phone_0.jpg"alt="mobile"/>
                    <p className="legend">Huawai</p>
                    
            </div>
            <div>
            <img src="https://images.wallpaperscraft.com/image/lg_mobile_phones_brand_communications_26175_1280x1024.jpg"alt="mobile" />

                    <p className="legend">LG</p>
            </div>
            <div>
            <img src="https://www.notebookcheck.net/uploads/tx_nbc2/LenovoVibeK5Note__1_.jpg" alt="mobile"/>
                    <p className="legend">Lenovo</p>
            </div>
            <div>
            <img src="https://my-test-11.slatic.net/p/dd9e4898f2d7cdd7da2bbe9744ff0fe6.jpg" alt="mobile"/>
                    <p className="legend">VIVO</p>
            </div>
            <div>
            <img src="https://images.wallpaperscraft.com/image/motorola_moto_x_style_smartfon_103677_1280x1024.jpg" alt="mobile"/>
                    <p className="legend">Matrola</p>
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
