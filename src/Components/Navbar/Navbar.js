import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar=()=> {
  const [sticky,setSticky]=useState(false);
  const [mobileMenu,setMobileMenu]=useState(false);
  useEffect(()=>{
     window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true):setSticky(false);
     })
  },[])

  const toggleMenu=()=>{
    // toggling mobileMenu
    setMobileMenu(!mobileMenu);
  }
  return (
    //for container add space to left and right I want this space for all the components so add it inside index.css
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="logo image" className='logo' />
        {/* initially mobileMenu was false so hide-mobile menu was applied. hence menu not show */}
        <ul className={mobileMenu?'':'hide-mobile-menu'}> 
          {/* offset refers to space from top after scroll  */}
            <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li> <button className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></button> </li>
            {/* this btn class i need in multiple component so add it in index.css */}


        </ul>
        <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
