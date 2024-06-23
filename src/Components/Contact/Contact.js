import React,{useState} from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ec9a1955-c648-42cf-9ee3-6a55a6cab071");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); /**after submit it will reset the form */
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id='contact'>
        <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt="msg icon" /> </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        <ul>
            <li><img src={mail_icon} alt="mail icon" /> Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="phone icon" />+1 123-456-7898</li>
            <li><img src={location_icon} alt="location icon" />77 Massachusetts Ave, Cambridge<br/>MA 01234, United States</li>
        </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name...' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your messages here</label>
               <textarea name='message' placeholder='Enter your message...' rows="6" required></textarea>
               <button className='btn dark-btn'>Send <img src={white_arrow} alt="arrow" /></button>
            </form>
            <span>{result}</span>
            
        </div>
      
    </div>
  )
}

export default Contact
