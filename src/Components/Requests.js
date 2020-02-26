import React, { Component } from 'react'
import Card from '../Card/Card'
import { connect } from 'react-redux';
import {updateRequest } from '../redux/Actions'

class Requests extends Component {

  state={
    size:5
  }

  handleLoad=()=>{
    this.setState({size:this.state.size+5})
  }

   
  render() {
      let newArr = this.props.data.filter(item => item.status === 'PENDING' && item.typeId === this.props.environment)

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
        status = {'Pending Request'}
        id={item.id}
        key={item.id}
        name={item.name}
        progress={'request'}
        location = {item.location}
        numberOfDeals = {item.numberOfDeals}
        reqestMadeTime= {item.reqestMadeTime}
        availableTime= {item.availableTime}
        availableLocation= {item.availableLocation}
        sessionFee= {item.sessionFee}
        button1={'Accept Request'}
        button2={'Reschedule'}
        click = {this.props.update}
        />
       
        // return <li onClick ={()=>this.clickHandler()}>{item.name}</li>

    })
    return (<div>
              {toRender}
              <div style={{textAlign:'center',color:'grey',margin:20,fontWeight:600}}>{limiter}</div>
            </div>
    )
  }
}
const mapStateToProps =(state)=>{
    return {data:state.data,environment:state.environment}
  }

const mapDispatchToProps =(dispatch)=>{
    return{
        update:(id)=>dispatch(updateRequest(id))
    }
}
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Requests)