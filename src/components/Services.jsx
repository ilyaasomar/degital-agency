import React from 'react'

const Services = () => {
  return (
    <div className="max-w-[1640px] p-4">
        {/* top bar */}
        <div className="flex flex-col items-center space-y-4">
            <h4 className="font-semibold text-xl text-[#05156D]">What We Offer</h4>
            <h1 className="font-bold text-4xl text-gray-600">Our Creative Services</h1>
            <p className="font-normal text-xl text-gray-600 max-w-[580px] leading-7 text-center">Get the most reduction of your team's operation cost 
                for whole product which creates amazing UI/UX Experience
            </p>
        </div>
        {/* cards container */}
        <div className="flex flex-col md:flex-row flex-wrap space-y-10 items-center justify-center">
        {/* card */}
        <div className="px-10 py-7 mt-8 shadow-2xl bg-gray-100 w-full md:w-1/2 
        flex flex-col
        md:flex-row items-center text-center md:text-start gap-10">
            {/* leftside image */}
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7889/7889802.png" alt="" />
        </div>
        {/* rightside content */}
        <div className='space-y-4'>
            <h1 className="font-medium text-gray-600 text-3xl">UI/UX Creative Design</h1>
            <p className="text-md text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloremque corporis eaque, cum voluptatibus porro odit natus ipsa
             minus nobis voluptas modi non voluptates facere id veritatis, 
             omnis commodi hic nemo?</p>
            <div className="items-center">
             <a href="#" className="border border-transparent px-3 py-2 bg-[#FFB400]
             text-white font-medium text-md rounded-lg hover:bg-[#05156D]">Read More</a>
            </div>
        </div>
        </div>
        {/* card 2 */}
        <div className="px-10 py-7 mt-8 shadow-2xl bg-gray-100 w-full md:w-1/2 
        flex flex-col
        md:flex-row items-center text-center md:text-start gap-10">
            {/* leftside image */}
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7889/7889802.png" alt="" />
        </div>
        {/* rightside content */}
        <div className='space-y-4'>
            <h1 className="font-medium text-gray-600 text-3xl">UI/UX Creative Design</h1>
            <p className="text-md text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloremque corporis eaque, cum voluptatibus porro odit natus ipsa
             minus nobis voluptas modi non voluptates facere id veritatis, 
             omnis commodi hic nemo?</p>
            <div className="items-center">
             <a href="#" className="border border-transparent px-3 py-2 bg-[#FFB400]
             text-white font-medium text-md rounded-lg hover:bg-[#05156D]">Read More</a>
            </div>
        </div>
        </div>
        {/* card 3 */}
        <div className="px-10 py-7 mt-8 shadow-2xl bg-gray-100 w-full md:w-1/2 
        flex flex-col
        md:flex-row items-center text-center md:text-start gap-10">
            {/* leftside image */}
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7889/7889802.png" alt="" />
        </div>
        {/* rightside content */}
        <div className='space-y-4'>
            <h1 className="font-medium text-gray-600 text-3xl">UI/UX Creative Design</h1>
            <p className="text-md text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloremque corporis eaque, cum voluptatibus porro odit natus ipsa
             minus nobis voluptas modi non voluptates facere id veritatis, 
             omnis commodi hic nemo?</p>
            <div className="items-center">
             <a href="#" className="border border-transparent px-3 py-2 bg-[#FFB400]
             text-white font-medium text-md rounded-lg hover:bg-[#05156D]">Read More</a>
            </div>
        </div>
        </div>
        {/* card 4 */}
        <div className="px-10 py-7 mt-8 shadow-2xl bg-gray-100 w-full md:w-1/2 
        flex flex-col
        md:flex-row items-center text-center md:text-start gap-10">
            {/* leftside image */}
        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/7889/7889802.png" alt="" />
        </div>
        {/* rightside content */}
        <div className='space-y-4'>
            <h1 className="font-medium text-gray-600 text-3xl">UI/UX Creative Design</h1>
            <p className="text-md text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloremque corporis eaque, cum voluptatibus porro odit natus ipsa
             minus nobis voluptas modi non voluptates facere id veritatis, 
             omnis commodi hic nemo?</p>
            <div className="items-center">
             <a href="#" className="border border-transparent px-3 py-2 bg-[#FFB400]
             text-white font-medium text-md rounded-lg hover:bg-[#05156D]">Read More</a>
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Services