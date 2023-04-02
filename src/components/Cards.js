import React from 'react'
import '../CSS/Cards.css';


function Cards () {

  return (
    <section id="cards">
        <i><p>My Recent Work</p></i>

        <b><h1>Projects</h1></b>

      <div className='container card_container'>
        <article className='card_item'>
          <div className='card_item-image'>
            <img className='skate' src='./images/IMG1.JPG' alt='me'/>
            <h3>SkaterWorld</h3>
            <p><i>Go skateboarding and forget about the rest of the world.</i></p>
            <div className='card_btn'>
            <a href='https://github.com/AllanJay13/AllanJay13.github.io' className='btn' target='_blank'>Github</a>
            <a href='https://allanjay13.github.io/' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
        <article className='card_item'>
           <div className='card_item-image'>
            <img src='./images/IMG2.JPG' alt='me'/>
            <h3>Medical Town</h3>
            <p><i>Your partner in health and wellness</i></p>
            <div className='card_btn'>
            <a href='https://github.com/AllanJay13/AllanPatientForm.github.io' className='btn' target='_blank'>Github</a>
            <a href='https://allanjay13.github.io/AllanPatientForm.github.io/' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
        <article className='card_item'>
          <div className='card_item-image'>
            <img src='./images/IMG3.JPG' alt='me'/>
            <h3>My First Calculator</h3>
            <p><i>The beginning of something great: my first calculator</i></p>
            <div className='card_btn'>
            <a href='https://github.com/AllanJay13/AllanCalculator.github.io' className='btn' target='_blank'>Github</a>
            <a href='https://allanjay13.github.io/AllanCalculator.github.io/' className='btn btn-warning' target='_blank'>Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
        
  )
  }

export default Cards