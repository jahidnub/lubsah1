import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (115)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to LUBSAH – Your destination for timeless elegance in women's fashion. 
                    At Lubsah, we believe in empowering women with stylish, 
                    high-quality clothing designed to inspire confidence. Explore our exclusive collection of sarees,
                     three-piece sets, and more, crafted with care and attention to detail.
                     Whether you're dressing for a special occasion or updating your wardrobe, 
                    Lubsah offers fashion that complements your unique style. Join us and elevate your everyday look with
                    Lubsah's signature touch of sophistication.</p>
                    <p>LUBSAH website typically display products or services along with detailed descriptions, images, prices and 
                        any available variations (e.g. sizes, colors). Each product usually has it's own dedicated page with relevent 
                        information.
                    </p>
        </div>
    </div>
  )
}

export default DescriptionBox