import React,{useState,useEffect} from 'react';

import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window, addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky ?'dark-nav' : ''}`}>
          <img src={logo} alt="logo" className='logo'/> 
          <ul>
        <li> <Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
              <li><Link to='program' smooth={true} offset={-360} duration={500}>Program</Link></li>
              <li><Link to='about' smooth={true} offset={-210} duration={500}>About us</Link></li>
              <li><Link to='campus' smooth={true} offset={-360} duration={500}>Campus</Link></li>
              <li><Link to='testimonial' smooth={true} offset={-360} duration={500}>Testimonials</Link></li>
              <li><Link to='contact' smooth={true} offset={-360} duration={500}><button className='btn'>Contact us</button></Link></li>
          </ul>
    </nav>
  )
}

export default Navbar
