import React from 'react'
import Header from './Header'

function Gif() {
    return (
      <section id="gf">
        <div className='gif'>
            <img src="./images/gifs.gif" alt='gif'/>
        </div>
        <Header/>
      </section>  
    )
}

export default Gif