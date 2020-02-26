import React, { Component } from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux';
// import { updateService } from '../redux/Actions'

class Payments extends Component {

  state={
    size:5
  }

  handleLoad=()=>{
    this.setState({size:this.state.size+5})
  }



  clickHandler=()=>{
    console.log('resend invoice')
  }



    
  render() {
 

    let newArr = this.props.data.filter(item => item.status === 'DONE' && item.typeId === this.props.environment)

    let mod = newArr.slice(0,this.state.size)

    let limiter

    if(mod.length === newArr.length){

      limiter =<p>No more bookings</p>

    }
    else
    {
      limiter = <p onClick = {this.handleLoad} style={{cursor:'pointer'}}>Load More</p>
    }

    const toRender = mod.map((item) => {
        return <Card     
        status = {'Pending Payment'}
        key = {item.id}
        id={item.id}
        name={item.name}
        progress={'payment'}
        location = {item.location}
        numberOfDeals = {item.numberOfDeals}
        reqestMadeTime= {item.reqestMadeTime}
        availableTime= {item.availableTime}
        availableLocation= {item.availableLocation}
        sessionFee= {item.sessionFee}
        button1={'Resend Invoice'}
        button2={'Start a Chat'}
        click = {this.clickHandler}
        />

    })
    return (<div>
      {toRender}
      <div style={{textAlign:'center',color:'grey',margin:20,fontWeight:600}}>{limiter}</div>
    </div>)
  }
}
const mapStateToProps =(state)=>{
    return {data:state.data,environment:state.environment}
  }

// const mapDispatchToProps =(dispatch)=>{
//     return{
//         update:(id)=>dispatch(updateService(id))
//     }
// }
  
  
export default connect(mapStateToProps)(Payments)