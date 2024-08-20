import React from 'react'
import './skill.css'
import WebDesign from '../../assets/website-design.png';

function Skill() {
  return (
    <section id='skill'>
     <span className='skillTitle'>What I do</span>
     <span className='skillDesc'>Hello, I’m Sriyanka Gupta, and I work as a web developer.
       With substantial experience in this field, I am passionate about creating well-functioning websites.
      I am proficient in HTML, CSS, Tailwind, JavaScript, and React, and I also have knowledge of core Java.
       I consider myself a very ambitious person who loves tackling new challenges and improving web performance.

</span>
     <div className='skillBars'>
        <div className='skillBar'>
            <img src={WebDesign} alt=""  className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Website Devloper</h2>
                <p> This demo text can be changed while making the production ready website</p>
            </div>

        </div>
     </div>
     <h1 className='aboutHeader'>About Me</h1>
     <div className='aboutMe'>
      
       <div className='aboutOne'>
           <p> Name : SriyankaGupta</p>
           <br />
           <p> Degree : Post Graduation(English)</p>
           <br />
           <p> Phone : 9735521242</p>
           <br />
           <p> Address : Deganga,North 24 Parganas,743423</p>
       </div>
       <div className='aboutTwo'>
         <p> Birthday : 5th July 1992</p>
         <br />
         <p> Designation : Job Seeker</p>
         <br />
         <p>Email : sriyankagupta24@gmail.com</p>
       </div>
       
     </div>
    </section>
  )
}

export default Skill