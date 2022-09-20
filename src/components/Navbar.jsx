import React, {useState} from 'react'
import menuIcon from '../images/icons/menu.svg'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  // console.log(menu)
  return (
    <div className="flex justify-between items-center py-4 bg-[#05156D] text-white max-w-[1640px] px-5 relative">
        {/* left section / logo */}
        <div>
            <h1 className='text-3xl font-bold'>LOGO</h1>
        </div>
        {/* middle */}
        <div className="hidden md:flex font-medium text-lg list-none gap-10">
            <li><a href=''> Home </a> </li>
            <li><a href=''> About </a> </li>
            <li><a href=''> Services </a> </li>
            <li><a href=''> Features </a> </li>
            <li><a href=''> Blog </a> </li>
            <li><a href=''> Contact Us </a> </li>

        </div>
        {/* right section */}
        <div className="hidden md:block">
            <button className="bg-[#FFB400] text-white">LET'S TALK</button>
        </div>
        <div className="md:hidden">
            <img src={menuIcon} alt='' className="md:hidden text-white" onClick={() => setMenu((prev) => !prev)} />
        </div>
        {/* mobile menu */}
          
                <div className={`md:hidden absolute top-[65px] items-center duration-300
                ${menu ? "right-2" : "hidden"}`}>
                <div className="bg-[#FFB400] w-36 rounded-xl flex flex-col items-center list-none space-y-3 py-2 text-white font-semibold">
                <li><a href='#'> Home </a> </li>
                  <li><a href='#'> About </a> </li>
                  <li><a href='#'> Services </a> </li>
                  <li><a href='#'> Features </a> </li>
                  <li><a href='#'> Blog </a> </li>
                  <li><a href='#'> Contact Us </a> </li>
                </div>
                
              </div>
                  
      
        
    </div>

  )
}

export default Navbar