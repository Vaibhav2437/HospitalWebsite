import React from 'react'
import '../Assets/About.css'
import { NavLink } from 'react-router-dom'
import aboutimg from '../Static/about-img.jpg'
const About = () => {
  return (
    <div>
      <div className="container  abouts mb-5 pb-5 pt-5">
        <div className="d-flex about">
          <div className="aboutimgage">
            <img src={aboutimg} alt="About Us" className='aboutim'/>
          </div>
          <div className="about-content ps-3">
            <h3 className="text-uppercase">About Us</h3>
            <p>
              Welcome to [Hospital Name], a trusted name in healthcare
              committed to providing exceptional medical services with
              compassion and expertise. Our state-of-the-art facility is
              equipped with advanced technology and staffed by a team of
              highly skilled doctors, nurses, and healthcare professionals
              dedicated to delivering personalized care. From emergency
              services to specialized treatments, we strive to ensure the
              well-being and recovery of every patient. At [Hospital Name],
              your health and comfort are our top priorities, and we are here
              to support you at every step of your journey to wellness.
            </p>
            <div className="readmore aboutmore mt-5 ">
              <NavLink to="/about" className="text-light">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
