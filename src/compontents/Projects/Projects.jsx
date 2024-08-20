import React from 'react'
import './projects.css';
import projectIcon from '../../assets/Project.png';

function Projects() {
  return (
    <div id='project'>
      <div className='Header'>
        <h2 className='workstitle'>My Projects</h2>
        <span className='worksDesc'></span>
      </div>
      <div className='works'>
        <div className='worksOne'>
          <img src={projectIcon} alt="" className='workImg' />
          <p className='workName'>Recipe App</p>
          <a href="https://elegant-paprenjak-4a2aa1.netlify.app" target="_blank">
            <button className='workBtn'>Visit Site</button>
          </a>
        </div>
        <div className='worksTwo'>
          <img src={projectIcon} alt="" className='workImg' />
          <p className='workName'>Quiz App</p>
          <a href="https://chipper-kangaroo-8c2049.netlify.app" target="_blank">
            <button className='workBtn'>Visit Site</button>
          </a>
        </div>
        <div className='worksThree'>
          <img src={projectIcon} alt="" className='workImg'/>
          <p className='workName'>Portfolio</p>
          <a href="https://teal-biscuit-355055.netlify.app" target="_blank">
            <button className='workBtn'>Visit Site</button>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Projects
