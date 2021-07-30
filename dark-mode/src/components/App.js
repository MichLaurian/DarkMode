import React, { useEffect, useState } from "react";
import "./App.css";

import '../assets/moon.png'

export default function App() {
    const [darkMode, setDarkMode] = useState(getInitialMode())

    useEffect(() => {
       localStorage.setItem('dark', JSON.stringify(darkMode))
    }, [darkMode])

    function getInitialMode(){
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        return savedMode || false ; 
    }

    const handleChange = (e) =>{
        const { name, value } = e.target;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
 return (
  <div className={darkMode ? 'dark__mode' : 'light__mode'}>
   <nav className="">
    <h1>Dark Mode Challenge</h1>

   <div className="toggle__container">
        <span><img src='../assets/sun.png' alt='sun'/></span>

        <span className="toggle">
        click
            <input 
            checked={darkMode}
            type="checkbox"
            onChange={()=> setDarkMode(prevMode => !prevMode)}
        
            className='checkbox'
            id='checkbox' />
        </span>
        <label htmlFor="checkbox" />

        <span><img src='../assets/moon.png' alt='moon'/></span>

       {/* <button onClick={()=> setDarkMode(prevMode => !prevMode)}>
        toggle mode
       </button> */}
   </div>
   </nav>
   <div className="">
    <div>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
     est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
     minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
     ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
     est laborum
    </div>
    <form onSubmit={handleSubmit}>
     <input
     className='form__input'
      type="text"
      onChange={handleChange}
      name="name"
      required
      placeholder="Name"
     />
     <input
     className='form__input'
      type="email"
      onChange={handleChange}
      name="email"
      required
      placeholder="email"
     />
     <button className="button__exit">Exit</button>
     <button className="button__save">Save</button>
    </form>
   </div>
  </div>
 );
}
