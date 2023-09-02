import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className = 'max-w-[1366px] mx-auto flex justify-between items-center p-4'>
        {/* [] are used to add the coustem value,
        p-4 == 1rem */}
        {/* left side */}
        <div className='flex items-center'>
            <div className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best 
            <span className='font-bold'> Eats</span></h1> 
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'> 
                <p className='bg-black text-white rounded-full p-2'>Delivery </p>
                <p className='p-2'> PickUp</p>
            </div>           
        </div>

        {/* search box */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search Food items' />
        </div>
        {/* cart btn */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>
    </div>
  )
}

export default Navbar