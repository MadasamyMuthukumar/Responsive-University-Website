import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar=()=> {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true):setSticky(false);
     })
  },[])
  return (
    //for container add space to left and right I want this space for all the components so add it inside index.css
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="logo image" className='logo' />
        <ul>  
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li> <button className='btn'>Contact us</button> </li>
            {/* this btn class i need in multiple component so add it in index.css */}


        </ul>
    </nav>
  )
}

export default Navbar
