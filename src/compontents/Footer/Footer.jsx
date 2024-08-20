import React from 'react';
import './footer.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';

function Footer() {
  return (
    <footer className='footer'>
      <div className='links'>
        <a href="https://www.facebook.com/profile.php?id=100006617144845" target="_blank" >
          <img src={FacebookIcon} alt="Facebook" className='link' />
        </a>
        <a href="https://www.instagram.com" target="_blank" >
          <img src={InstagramIcon} alt="Instagram" className='link' />
        </a>
        <a href="https://www.linkedin.com/in/sriyanka-gupta-555154170/" target="_blank" >
          <img src={LinkedinIcon} alt="Linkedin" className='link' />
        </a>
        <a href="https://github.com/Sriyanka92" target="_blank" >
          <img src={GithubIcon} alt="Github" className='link' />
        </a>
      </div>
      <div className='credits'>
      © Designed by Sriyanka Gupta
      </div>
    </footer>
  )
}

export default Footer;
