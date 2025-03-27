import React from 'react'



function Course({ course }) {
    console.log(course)
    const {id, title, description, price, link,image} = course
  return (
    <div className='course' >
        <div>        
      <img src={image} width={250} height={250} />
      <h4>{title}</h4>
      <h5>{description}</h5>
      <h3>{price}</h3>
      <h6>{link}</h6>
      </div>
    </div>
   
  )
}

export default Course
//  props destructuring