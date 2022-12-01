import React from 'react'
import logo from './assets/logo.jpg'
import './Nav.css';

export default function nav() {
  return (
     <>
      <div className="banner"> 
            <div>
              <img id='logo' height='80' src={logo} />             
            </div>    
            <div className='mainList'>
               <ul className='list'>
                <li className='list_item' onClick={() => {console.log("Check")}}>Home</li>
                <li className='list_item'>About</li>
                <li className='list_item'>Contact</li>
               </ul>
            </div>        
         </div>
     </>
  )
}
