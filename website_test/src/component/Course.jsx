import React from 'react'
import './Course.css'


function Course({ course }) {
    
    const {id, title, description, price, link,image} = course
  return (
    <div className='course' >
        <div className='item'>        
      <img src={image}  />
      <h4>{title}</h4>
      <h5>{description}</h5>
      <h3>{price} €</h3>
      <h6>{link}</h6>
      </div>
    </div>
   
  )
}

export default Course
//  props destructuring