import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import Yoga from '../Assets/yoga.jpg'
import Boxing from '../Assets/boxing.jpg'
import { connect } from 'react-redux';
import {updateEnvironment } from '../redux/Actions'
import './Selector.css'

class Selector extends Component {
    handleClick=(event)=>{
        this.props.update(event);
    }
  render() {
    return (
        
      <Carousel showThumbs={false}  className='Selector' emulateTouch onChange={this.handleClick} >

          <div>
              <img src={Yoga} alt={'yoga'}/>
              <p className="legend">Yoga</p>

          </div>
          <div>

              <img src ={Boxing} alt={'boxing'}/>
              <p className="legend">Boxing</p>

          </div>



      </Carousel>
  
    )
  }
}


const mapDispatchToProps =(dispatch)=>{
    return{
        update:(id)=>dispatch(updateEnvironment(id))
    }
}
  
  
export default connect(null,mapDispatchToProps)(Selector)