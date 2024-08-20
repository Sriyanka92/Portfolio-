import React from 'react'
import './education.css'
function Education() {
  return (
    <>
        <div className='header'>
        <h1 > Education</h1>
        </div>
    <section className='education'> 
      
       <div className='postGraduation'>
        <div className='postHeader'>
        <h2 >Post Graduation </h2>
        </div>
            <div className='postDes'>
            <p>Netaji Subhas Open University</p>
            <br />
            <p>Duration : 2021-2023</p>
            </div>
       </div>
       <div className='graduation'>
              <div className='graduationHeader'>
              <h2 >Graduation</h2>
              </div>
            <div className='graduationDes'>
            <p>Netaji Subhas Open University</p>
            <br />
            <p>Duration : 2018-2020 </p>
            </div>
       </div>
       <div className='higherSecondary'>
           <div className='higherHeader'>
           <h2 >Higher Secondary</h2>
           </div>
           <div className='higherDes'>
           <p>West Bengal Council of Higher Secondary Education </p>
           <br />
           <p>Duration : 2009-2010</p>
           </div>
       </div>
       <div className='secondary'>
         <div className='secondaryHeader'>
         <h2 >Secondary</h2>
         </div>
         <div className='secondaryDes'>
         <p> WestBengal Board of Secondary Education</p>
         <br />
         <p> Duration :-2008</p>
         </div>
       </div>
    </section>
    </>
  )
}

export default Education