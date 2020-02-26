import React from 'react'
import './Card.css'
import Avatar from '../Assets/avatar.png'
import Button from '../Button/Button'

 const Card = (props) =>
    {
      return <div className='Card'>
          <div style={{display:'flex',justifyContent:"space-between"}}>
              <div>
                    <h1>{props.status}</h1>
                    <h2>{props.reqestMadeTime}</h2>
              </div>
          <div> <img src={require('../Assets/' + props.progress + '.png')}/> </div>
          </div>
          <div className="LayoutStyle">
          <div style={{display:'flex'}}>
            <div style={{position:'relative',padding:20}}><img src={Avatar}/></div>
            <div>
              <h3>{props.name}</h3>
              <h4>{props.location}</h4>
              </div>
          </div>
          <div>
              <h5>{`You two has ${props.numberOfDeals} deals before`}</h5>
          </div>
          </div>

          <div className='ButtonStyle'>
            <div onClick={()=>props.click(props.id)}><Button> {props.button1}</Button></div>
            <Button>{props.button2}</Button>
            
          </div>

      </div>
    
  }


export default Card