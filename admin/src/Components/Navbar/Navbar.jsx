import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.png'
import navProfile from '../../assets/navProfile.png'
import navProf from '../../assets/navProf.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} className="nav-logo" alt="" />
        <img src={navProfile} className='nav-profile' alt="" />
        <img src={navProf} className='nav-profile1' alt="" />
        
    </div>
  )
}

export default Navbar