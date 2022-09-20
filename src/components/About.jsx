import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1640px] mx-auto py-20'>
        <h1 className="text-5xl font-bold text-center text-gray-700">About Us</h1>
        {/* container */}
        <div className="flex flex-col md:flex-row px-10 py-20 gap-20">
        {/* left side */}
        <div className="w-full h-1/3 md:h-full md:w-2/5 bg-gray-200 p-3 rounded-lg shadow-lg">
        <img src="https://images.pexels.com/photos/12932676/pexels-photo-12932676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
        className="w-full md:h-[650px] rounded-lg" />
        </div>
        {/* right side */}
        <div className="w-full md:w-3/5 flex-col justify-center space-y-10">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-600">We are creatin something, design for your future</h1>
            <p className="text-gray-600 font-medium leading-8 text-lg max-w-xl text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries</p>
            <div className='flex flex-col flex-wrap text-start text-gray-600 font-semibold leading-7 md:leading-[50px] text-sm md:text-2xl'>
            <div className="flex items-center space-x-3">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-indigo-800 rounded-full"></div>
            <h2 className="">Price of aditional material or parts</h2>
            </div>
            <div className="flex items-center space-x-3">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-indigo-800 rounded-full"></div>
            <h2>Transportation part for carrying new material</h2>
            </div>
            <div className="flex items-center space-x-3">
            <div className="w-3 h-3 md:w-5 md:h-5 bg-indigo-800 rounded-full"></div>
            <h2>You wil get 100% money back</h2>
            </div>

            </div>
            <div className="flex gap-10">
            <button className="bg-[#FFB400] text-white border-transparent text-sm p-1 md:px-4 py-2 md:text-lg hover:bg-[#05156D]">Know More</button>
            <div className="flex gap-3 items-center">
                <img src="https://cdn.iconscout.com/icon/free/png-64/setting-mechanic-1820839-1546508.png" alt=""
                className='w-6 h-6 md:w-8 md:h-8' />
                <h2 className="text-lg md:text-4xl font-semibold text-gray-600">10+ Years Experience</h2>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About