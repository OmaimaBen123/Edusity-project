import React from 'react'
import './About.css'
import about_img from '../../assets/about.avif';
import play_icon from  '../../assets/play_icon.png';

const About = () => {
  return (
      <div className='about'>
          <div className="about-left">
              <img src={about_img} alt="" className='about-img' />
              <img src={play_icon} alt="" className='play-icon' />
          </div>
          <div className="about-right">
              <h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
              <p>Our university is committed to providing a
                  dynamic learning environment where students are
                  empowered to achieve their full potential.
              </p>
                 <p>With a focus on academic excellence, innovation, and personal growth,
                  we prepare our students to become the leaders of tomorrow.
                  Through a rich curriculum, hands-on experiences,
                  and a community of support, we nurture creativity,
                  critical thinking, and a passion for knowledge.
              </p> 
                  <p>Our graduates leave with the skills, confidence,
                  and global perspective needed to make a positive impact in their communities and beyond.</p>
                  

          </div>
      
    </div>
  )
}

export default About
