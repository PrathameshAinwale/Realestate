import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { useEffect } from 'react'

const Navbar = () => {

    const [showMobileMenu,setmobileMenu]= useState(false);

    useEffect (() => {
        if(showMobileMenu){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='auto';
        }

        return()=>{
            document.body.style.overflow='auto';
        }
        
    },[showMobileMenu])
    
  return (
    <div className='absolute w-full top-0 left-0 z-10'>
        <div className='mx-auto flex justify-between items-center py-4 px-7 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-12'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400 text-white'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400 text-white'>About Us</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400 text-white'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400 text-white'>Testimonials</a>

            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-black hover:text-white hover:transition-all ease-in-out'>Sign Up</button>
            <img onClick={()=>{setmobileMenu(true)}} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        
{/* ----------------MOBILE NAVBAR--------------------- */}
<div className= {` md:hidden ${showMobileMenu ? 'fixed w-full' :'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
    <div className='flex justify-end p-7 cursor-pointer'>
        <img onClick={()=>{setmobileMenu(false)}} src={assets.cross_icon} alt="" className='w-6'/>
    </div>
    <ul className='flex flex-col mt-5 px-5 gap-3 items-center text-lg font-medium'>
        <a onClick={()=>{setmobileMenu(false)}} href="#Header" className='px-4 py-4 rounded-full inline-block'>Home</a>
        <a onClick={()=>{setmobileMenu(false)}} href="#About" className='px-4 py-4 rounded-full inline-block'>About Us</a>
        <a onClick={()=>{setmobileMenu(false)}} href="#Projects" className='px-4 py-4 rounded-full inline-block'>Projects</a>
        <a onClick={()=>{setmobileMenu(false)}} href="#Testimonials" className='px-4 py-4 rounded-full inline-block'>Testimonials</a>
    </ul>
</div>
      
    </div>

  )
}
export default Navbar