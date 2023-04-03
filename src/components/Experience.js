import React from 'react';
import '../CSS/Experience.css'


const Experience = () => {
  return (
    <section id='experience'>
      <div>
        
      <div className='title'>
        <p>What Skill I Have</p>
        <h4>My Experience</h4>
      </div>
      
      <div className='container experience_container'>
        <div className='experience_frontend'>
            <div className='fd'>Frontend Development</div>
          <div className='experience_content'>
            <article className='experience_details'>
            <img src='./images/htmlp.png' alt='html' />
              <div><p><i>HTML</i></p></div>
            </article>
            <article className='experience_details'>
            <img src='./images/csspp.png' alt='html'  />
               <div><p><i>CSS</i></p></div>
            </article>
             <article className='experience_details'>
             <img className='js' src='./images/jspp.png' alt='html' />
               <div ><p><i>JavaScript</i></p></div>
             </article>
             <article className='experience_details'>
             <img src='./images/strapp.png' alt='html'  />
               <div><p><i>Bootstrap</i></p></div>
             </article>
             <article className='experience_details'>
             <img src='./images/reactp.png' alt='html' />
               <div><p><i>ReactJS</i></p></div>
             </article>
             <article className='experience_details'>
              <img src='./images/Mui.png' alt='html' />
                <div><p><i>Material UI</i></p></div>
              </article>
          </div>
        </div>

        <div className='experience_backend'>
            <p className='fd'>Backend Development</p>
          <div className='experience_content'>
          </div>
        </div>
      </div>
        <p>"Believe in yourself and your ability to learn. With hard work, dedication, and a passion for coding, you can become a successful full-stack web developer and turn your dreams into reality."</p>
      </div>
    </section>
  )
}

export default Experience