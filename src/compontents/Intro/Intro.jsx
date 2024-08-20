import React from 'react'
import './intro.css';
import bg from '../../assets/Image.png';
import btnImg from '../../assets/hireme.png';

function Intro() {
  return (
    <section id="intro">
        <div className='introContent'>
          <span className='hello'>Hello</span>
          <span className='introText'>I'm <span className='introName'>Sriyanka Gupta</span> <br />Web Developer </span>
          <p className='introPara'></p>
          <a href="/Resume-Sriyanka.pdf" download>
          <button className='btn'>
              <img src={btnImg} alt="Hire" className='btnImg' />Download CV
            </button>
          </a>
        </div>
        <img src={bg} alt="" className='bg' />
    </section>
  )
}

export default Intro
