import React from 'react'
import Logo from '../images/logo.png'
const Footer = () => {
  return (
    <div className='max-w-[1640px] bg-[#05156D] text-white mt-12'>
        {/* footer container for small devices */}
        <div className='md:hidden flex flex-col items-center p-4 px-24 py-8 gap-5'>
        {/* logo */}
            {/* <h1 className="text-3xl font-bold text-center">LOGO</h1> */}
            <img src={Logo} alt='' className='w-36 h-7' />
        {/* social media */}
        <div className="flex justify-between gap-3 w-52 items-center">
           <div className='text-black bg-[#FFB400] w-[45px] p-1 rounded-full cursor-pointer'>
            <img src="https://cdn.iconscout.com/icon/free/png-64/github-online-project-hosting-square-46234.png" 
            className='w-10 h-10' />
            </div>
            <div className='text-black bg-[#FFB400] w-[45px] p-1 rounded-full cursor-pointer'>
            <img src="https://cdn.iconscout.com/icon/free/png-64/facebook-1464523-1239437.png" 
            className='w-10 h-10' />
            </div>
            <div className='text-black bg-[#FFB400] w-[45px] p-1 rounded-full cursor-pointer'>
            <img src="https://cdn.iconscout.com/icon/free/png-64/instagram-1464521-1239436.png" 
            className='w-10 h-10' />
            </div>
            <div className='text-black bg-[#FFB400] w-[45px] p-1 rounded-full cursor-pointer'>
            <img src="https://cdn.iconscout.com/icon/free/png-64/linkedin-1464529-1239440.png" 
            className='w-10 h-10' />
            </div>
        </div>
        {/* copyright */}
        <h1 className='font-bold text-md text-center'>&copy; Copyright by Ilyas Dev 2022</h1>
        </div>
    {/* footer container form medium devices */}
    <div className='hidden md:flex md:flex-row md:justify-between p-4 px-24 py-12'>
    {/* logo section */}
    <div className='flex flex-col items-start gap-4 w-1/4'>
        {/* <h1 className='text-4xl font-bold'>LOGO</h1> */}
        <img src={Logo} alt='' className='w-44 h-7' />
        <p className='text-lg font-medium'>Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Id, veniam?</p>
            <div className='flex flex-col items-start gap-2'>
                <input type="text" placeholder="Enter your email"
                className='p-2 w-full outline-none rounded-md text-gray-600' />
                <button className='bg-[#FFB400]'>Send</button>
            </div>
    </div>
    {/* our sevices */}
    <div className='flex flex-col'>
        <h1 className='text-3xl font-bold'>Our Services</h1>
        <div className="py-4 space-y-3 font-medium text-md">
            <h3>Strategy & Research</h3>
            <h3>Web Development</h3>
            <h3>Web Solutions</h3>
            <h3>Degital Marketing</h3>
            <h3>App Design</h3>
            <h3>App Development</h3>

        </div>
    </div>
    {/* company */}
    <div className='flex flex-col'>
        <h1 className='text-3xl font-bold'>Company</h1>
        <div className="py-4 space-y-3 font-medium text-md">
            <h3>About Company</h3>
            <h3>About Services</h3>
            <h3>About Portfolio</h3>
            <h3>About Blog</h3>
            <h3>Latest News</h3>
            <h3>Contact Us</h3>
        </div>
    </div>
    {/* contact */}
    <div className='flex flex-col'>
    <h1 className='text-3xl font-bold'>Contact Us</h1>
        <div className='flex flex-col py-4 space-y-5 font-medium text-md'>
        <div className='flex max-w-[280px] items-center space-x-2'>
                <img src='https://cdn-icons-png.flaticon.com/128/727/727606.png' className='w-7 h-7' />
                <p>4517, Washinton Eve,
                    Menchester, Kontucky 3945902
                </p>
            </div>
            <div className='flex max-w-[280px] items-center space-x-2'>
                <img src='https://cdn-icons-png.flaticon.com/128/3247/3247310.png' className='w-7 h-7' />
                <p>252616437857
                </p>
            </div>
            <div className='flex max-w-[280px] items-center space-x-2'>
                <img src='https://cdn-icons-png.flaticon.com/128/3686/3686989.png' className='w-7 h-7' />
                <p>ilyaascumar11@gmail.com
                </p>
            </div>

        </div>
    </div>

        </div>

    </div>
  )
}

export default Footer