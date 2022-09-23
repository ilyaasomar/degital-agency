import React, {useState} from 'react'
// import MenuIcon from '../images/icons/menu.svg'
import Logo from '../images/logo.png'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  // console.log(menu)
  return (
    <div className="flex justify-between items-center py-4 bg-[#05156D] text-white max-w-[1640px] px-5 relative">
        {/* left section / logo */}
        <div>
            {/* <h1 className='text-3xl font-bold'>LOGO</h1> */}
            <img src={Logo} alt='' className='w-36 md:w-44 h-7' />
        </div>
        {/* middle */}
        <div className="hidden md:flex font-medium text-lg list-none gap-10">
            <li><a href='' className='hover:text-[#FFB400]'> Home </a> </li>
            <li><a href='' className='hover:text-[#FFB400]'> About </a> </li>
            <li><a href='' className='hover:text-[#FFB400]'> Services </a> </li>
            <li><a href='' className='hover:text-[#FFB400]'> Features </a> </li>
            <li><a href='' className='hover:text-[#FFB400]'> Blog </a> </li>
            <li><a href='' className='hover:text-[#FFB400]'> Contact Us </a> </li>

        </div>
        {/* right section */}
        <div className="hidden md:block">
            <button className="bg-[#FFB400] text-white">LET'S TALK</button>
        </div>
        <div className="md:hidden flex	text-white">
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/128/external-menu-100-most-used-icons-flaticons-flat-flat-icons-2.png" alt='' 
            className="md:hidden w-10" onClick={() => setMenu((prev) => !prev)} />
        </div>
        {/* mobile menu */}
          
                <div className={`md:hidden absolute top-[65px] items-center duration-300
                ${menu ? "right-2" : "hidden"}`}>
                <div className="bg-[#FFB400] w-36 rounded-xl flex flex-col items-center list-none space-y-3 py-2 text-white font-semibold">
                  <li><a href='#' className='hover:text-[#05156D]'> Home </a> </li>
                  <li><a href='#' className='hover:text-[#05156D]'> About </a> </li>
                  <li><a href='#' className='hover:text-[#05156D]'> Services </a> </li>
                  <li><a href='#' className='hover:text-[#05156D]'> Features </a> </li>
                  <li><a href='#' className='hover:text-[#05156D]'> Blog </a> </li>
                  <li><a href='#' className='hover:text-[#05156D]'> Contact Us </a> </li>
                </div>
                
              </div>
                  
      
        
    </div>

  )
}

export default Navbar