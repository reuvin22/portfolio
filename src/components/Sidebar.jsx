import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    const [burger, setBurger] = useState(false);
    const handleBurgerClick = () => {
        setBurger(!burger);
      }
      const handleCloseClick  = () => {
        setBurger(false);
      }
  return (
    <div>
        <div className="flex place-content-between relative xl:mx-20 xl:my-5 lg:mx-20 lg:my-5 md:mx-10 sm:mx-10">
          <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2FLogo1.png?alt=media&token=f3e8428f-61f3-4cbc-9334-be41e1c498ea" alt="Name Logo" className='h-32 w-32 my-1 sm:h-28 sm:w-28' id='logo'/>
          <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fburger.png?alt=media&token=2f1e79ab-c60f-4c8b-9813-00ee819fe218" 
            alt="Burger Button" 
            className="md:hidden lg:hidden xl:hidden sm:w-14 sm:h-14 cursor-pointer my-7"
            onClick={handleBurgerClick}/>
          <div className="flex gap-10 text-2xl place-items-center mx-10 sm:hidden" id='nav'>
            <Link to="/" className='navLinks'>Home</Link>
            <Link to="/about" className='navLinks'>About</Link>
            <Link to="/project" className='navLinks'>Projects</Link>
            <Link to="/contact" className='navLinks'>Contact</Link>
          </div>
        </div>
        <div className={`absolute h-96 w-screen z-20 bg-slate-900 mb-20 border-2 ${burger ? 'block' : 'hidden'}`} >
            <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/Portfolio%2Fx.png?alt=media&token=aa086fd7-1217-4300-8626-76c4044be0b2" 
              alt="Close Burger" 
              className='h-10 w-10 absolute right-0 mt-10 mr-10'
              onClick={handleCloseClick}/>
            <div className="grid place-items-center h-full mt-5 text-2xl">
              <Link to="/" className='navLinks'>Home</Link>
              <Link to="/about" className='navLinks'>About</Link>
              <Link to="/project" className='navLinks'>Projects</Link>
              <Link to="/contact" className='navLinks'>Contact</Link>
            </div>
          </div>
    </div>
  )
}

export default Sidebar