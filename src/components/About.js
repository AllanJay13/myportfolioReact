import React from 'react';
import '../CSS/About.css';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

function About() {
  return (
    <section id="about" className='body'>
      <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src='./images/allan1.png' alt='me'/>
            </div>
          </div>
          <div className='about_content'>
            <div className='about_cards'>
                <img src='./images/devguy.gif' alt='devguy'/>
          
                <p className='get'>Get to know </p>
                <h5>About Me</h5>
                <p>
                  Hey, I'm Allan Jay. I'm a full stack web developer living in
                  philippines. i am a fan of programming, and gaming. i'm also
                  interested in Street Skateboarding and music.
                </p>

            </div>
          </div>  
      </div>
      <div className='icons'>
       <a href='https://github.com/AllanJay13'><BsGithub/></a>
        <a href='https://www.facebook.com/ZehanChkaiiLauren'><BsFacebook/></a>
        <a href='https://twitter.com/yuukinojhudasx' className='twit'><AiFillTwitterCircle/></a>
      </div>
    </section>



  )
}

export default About