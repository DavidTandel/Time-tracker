import React from 'react'
import './LandingView.css'
import pie from '../Assets/pie-chart.jpeg'
import time_analytic from '../Assets/time-analytic.jpeg'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const LandingView = () => {
  return (
    <div>
      <div className='landing-view'>
        <img className='landing-view-img' src={pie} alt="" />
        <h1>Let Your Time <hr/>Manage with this <hr/>Exciting new Extension</h1>
      </div>
      <div className='landingview'>
        <h1>Exciting New Features</h1>
        <img src={time_analytic} alt="" className='time-analytic' />
      </div>
      <div className="contact-us">
        <h1>Contact us</h1>
      
      <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt=""/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 All Rights Reserved</p>
        </div>
        </div>
    </div>
  )
}

export default LandingView