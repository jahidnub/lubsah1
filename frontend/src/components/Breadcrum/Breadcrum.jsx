import React from 'react'
import './Breadcrum.css'
import arrow1 from '../Assets/arrow1.png'

const Breadcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
       HOME <img src={arrow1} alt="" /> SHOP <img src={arrow1} alt="" /> {product.category} <img src={arrow1} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums