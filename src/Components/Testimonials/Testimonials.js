import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
  /*slider will refer ul tag using that we horizontaly move testimonial forward and backward*/
     const slider=useRef();
     let tx=0; //intially display first two
     const slideForward=()=>{
      if(tx>-50){ //when forward was clicked tx become -25 and it translate -25%(means horizontaly right)
        tx-=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
     }
     const slideBackward=()=>{
      if(tx<0){ //when backward was clicked tx become +25 and it translate +25%(means horizontaly left)
        tx+=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`
     }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="next icon" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="back icon" className='back-btn' onClick={slideBackward} />

        <div className='slider'>
           <ul ref={slider}> {/*which has list of testimonials */}
            <li>
               <div className='slide'>
                <div className='user-info'>
                  <img src={user_1} alt="user-1" />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               </div>
            </li>

            <li>
               <div className='slide'>
                <div className='user-info'>
                  <img src={user_2} alt="user-2" />
                  <div>
                    <h3>Joshua</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               </div>
            </li>

            <li>
               <div className='slide'>
                <div className='user-info'>
                  <img src={user_3} alt="user-3" />
                  <div>
                    <h3>Jebasta</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               </div>
            </li>

            <li>
               <div className='slide'>
                <div className='user-info'>
                  <img src={user_4} alt="user-4" />
                  <div>
                    <h3>James Cameroon</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
               </div>
            </li>
          </ul>  
        </div>

      
    </div>
  )
}

export default Testimonials
