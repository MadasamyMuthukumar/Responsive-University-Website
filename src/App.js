import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
const App = () => {
  /**
   * to make visible and hide video player
   */
  const [playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className='container'>
      <Title title='What We Offer' subTitle='Our PROGRAM'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title title='Campus Photos' subTitle='Gallery'/>
      <Campus/>
      <Title title='What Student Says' subTitle='Testimonials'/>
      <Testimonials/>
      <Title title='Get in Touch' subTitle='Contact Us'/>
      <Contact/>
      <Footer/>
      </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
     
    </div>
  )
}

export default App
