import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo4.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div className='desktopMenu'>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
           <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
           <Link activeClass='active' to='education' spy={true} smooth={true} offset={-180} duration={500} className='desktopMenuListItem'>Education</Link>
           <Link activeClass='active' to='project' spy={true} smooth={true} offset={-112} duration={500} className='desktopMenuListItem'>Projects</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
        }}>
             <img src={contactImg} alt="" className='desktopMenuImg' /> Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
           <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
           <Link activeClass='active' to='education' spy={true} smooth={true} offset={-180} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Education</Link>
           <Link activeClass='active' to='project' spy={true} smooth={true} offset={-112} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-112} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}
