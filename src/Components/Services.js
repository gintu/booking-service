import React, { Component } from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux';
import { updateService } from '../redux/Actions'

class Services extends Component {

  state={
    size:5,
    tooltip:true
  }

  handleLoad=()=>{
    this.setState({size:this.state.size+5})
  }

  removeTooltip=()=>{
    this.setState({tooltip:false})
  }


    
  render() {
 

    let newArr = this.props.data.filter(item => item.status === 'ACTIVE' && item.typeId === this.props.environment)
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
        status = {'Upcoming Service'}
        key = {item.id}
        id={item.id}
        name={item.name}
        progress={'service'}
        location = {item.location}
        numberOfDeals = {item.numberOfDeals}
        reqestMadeTime= {item.reqestMadeTime}
        availableTime= {item.availableTime}
        availableLocation= {item.availableLocation}
        sessionFee= {item.sessionFee}
        button1={'Generate Invoice'}
        button2={'Check In'}
        click = {this.props.update}
        />
       
        // return <li onClick ={()=>this.clickHandler()}>{item.name}</li>

    })
    return (<div>

      {this.state.tooltip &&<div style={{background:'#008AB8',padding:20,color:'white'}}>
      <p>These are your upcoming services. You could scan 
your customer’s QR Code before service to check-in, 
or scan QR Code to generate invoice for payments.</p> <p onClick={this.removeTooltip} style={{textDecoration:'underline',fontWeight:700,cursor:'pointer'}}>close</p> 
      </div>}
      {toRender}
      <div style={{textAlign:'center',color:'grey',margin:20,fontWeight:600}}>{limiter}</div>
    </div>)
  }
}
const mapStateToProps =(state)=>{
    return {data:state.data,environment:state.environment}
  }

const mapDispatchToProps =(dispatch)=>{
    return{
        update:(id)=>dispatch(updateService(id))
    }
}
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Services)