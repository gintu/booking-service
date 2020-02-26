import React, { Component } from 'react'
import './App.css'
import Logo from './Assets/trova_logo.png'
import {BrowserRouter,NavLink,Route} from 'react-router-dom'
import Requests from './Components/Requests'
import Payments from './Components/Payments'
import Services from './Components/Services'
import Selector from './Selector/Selector'

export default class App extends Component {

  
  render() {

  


    return (
      <BrowserRouter>     
      <div className='App'>
      <div className='Header'><img src={Logo} alt="website logo" /></div>
        <ul className ='Nav'>
          <li><NavLink to = '/' exact activeStyle={{textDecoration:'underline'}} className='Tab'>Requests</NavLink></li>
          <li><NavLink to = '/services' className='Tab' activeStyle={{textDecoration:'underline'}}>Service</NavLink></li>
          <li><NavLink to = '/payments' className='Tab' activeStyle={{textDecoration:'underline'}}>Payments</NavLink></li>
        </ul>
        <Selector/>

        <div >
          <Route path='/payments' component ={Payments}/>
          <Route path='/services' component ={Services} />
          <Route path='/' exact component ={Requests} />
        </div>
        </div>
      </BrowserRouter>
    )
  }
}

