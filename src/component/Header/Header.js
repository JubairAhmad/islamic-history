import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (


           <div className='bg-gray-500 h-20 pt-3 text-center'>

            <NavLink to='/home' className='text-4xl no-underline text-white  m-3'>Home</NavLink>
            <NavLink to='/services' className='text-4xl no-underline text-white m-3'>Services</NavLink>
            <NavLink to='/about' className='text-4xl no-underline text-white m-3' >About</NavLink>
            <NavLink to='/signup' className='text-4xl no-underline text-white m-3' >Sign Up</NavLink>

           </div>


    );
};

export default Header;