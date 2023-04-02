import React from 'react'
import '../CSS/Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

function Footers() {
  return (
    <div>
        <footer>
            <div className='footer-content'>
                <p><i>"The simple things are also the most extraordinary things, and only the wise can see them."</i></p>
             <ul className='social'>
                <li><a href=""><BsFacebook /></a></li>
                <li><a href=""><BsTwitter /></a></li>
                <li><a href=""><BsInstagram /></a></li>
             </ul>
            </div>
            <div className='footer-copyright'>
                <p>
                    &#169; Copyright @{new Date().getFullYear()} Allan.S. All right reserved.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footers