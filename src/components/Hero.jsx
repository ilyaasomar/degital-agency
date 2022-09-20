import React from 'react'
const Hero = () => {
  return (
    <div className="bg-[#05156D] max-w-[1640px] h-[700px] px-4 md:h-[550px]">
            {/* container */}
        <div className="max-w-[1200px] mx-auto py-16 md:py-28 flex flex-col-reverse 
        md:flex-row md:items-start items-center justify-center gap-7">
       {/* left side */}
        <div className="md:w-1/2 text-white px-2 space-y-4 py-4 relative">
            <p className="font-bold text-lg">Welcome to our Agency</p>
            <h1 className="font-bold text-4xl md:text-6xl">Smart Ideas for your Brand are Here</h1>
            <p className="text-sm font-normal text-gray-300 leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque bibendum mauris id ex gravida, at condimentum sem fringilla. 
            Suspendisse feugiat vitae justo volutpat tristique. 
            Fusce efficitur scelerisque purus id sodales.
            </p>
            <div className="py-6 flex flex-col md:flex-row items-center justify-between  gap-7">
            <button className="bg-[#FFB400] text-white">Discover More</button>
           <div className="flex justify-between gap-3 w-56">
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
            
            </div>
        </div>
        {/* right side */}
        <div className='flex flex-center md:w-1/2 items-center rounded-full px-5 right-0'>
           <img src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
           className='w-[300px] h-[200px] md:w-full md:h-full object-cover rounded-full' />
        </div>
        </div>
    </div>
  )
}

export default Hero