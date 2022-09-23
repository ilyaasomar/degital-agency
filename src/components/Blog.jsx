import React from 'react'

const Blog = () => {
  return (
    <div className='max-w-[1640px] p-4 flex flex-col md:flex-row justify-between space-y-5 md:space-x-7'>
        {/* leftside */}
        <div className='shadow-2xl w-full md:w-1/3 h-[300px] p-5 flex flex-col items-center gap-10 rounded-lg'>
        <h1 className='text-5xl font-semibold text-center'>Discover Frequently Asked Question</h1>
        <button className='mt-10 bg-[#FFB400] text-primary hover:bg-[#05156D] hover:text-white border-transparent'>WORK TOGETHER</button>
        </div>
        {/* rightside */}
        <div className='w-full md:w-2/3 shadow-2xl flex flex-col gap-3'>
        <div className='bg-[#05156D] text-white flex p-5 px-7 space-x-4 rounded-md items-center'>
            <div className='flex space-x-3 justify-start'>
            <p className='font-bold text-sm md:text-xl'>01.</p>
            <p className='font-bold text-sm md:text-xl'>Curios About how to build your own ux strategy? Here are five simple steps</p>
            </div>
            <div className='font-bold text-sm md:text-2xl flex flex-row justify-end'>
                <span className='cursor-pointer'>+</span>
            </div>
        </div>
        <div className='bg-[#05156D] text-white flex p-5 px-7 space-x-4 rounded-md items-center'>
            <p className='font-bold text-sm  md:text-xl'>02.</p>
            <p className='font-bold text-sm  md:text-xl'>Curios About how to build your own ux strategy? Here are five simple steps</p>
            <div className='font-bold text-sm  md:text-2xl items-end flex mr-0'>
                <span className='cursor-pointer'>+</span>
            </div>
        </div>
        <div className='bg-[#05156D] text-white flex p-5 px-7 space-x-4 rounded-md items-center'>
            <p className='font-bold text-sm md:text-xl'>03.</p>
            <p className='font-bold text-sm md:text-xl'>Curios About how to build your own ux strategy? Here are five simple steps</p>
            <div className='font-bold text-sm md:text-2xl items-end flex mr-0'>
                <span className='cursor-pointer'>+</span>
            </div>
        </div>
        <div className='bg-[#05156D] text-white flex p-5 px-7 space-x-4 rounded-md items-center'>
            <p className='font-bold text-sm  md:text-xl'>04.</p>
            <p className='font-bold text-sm  md:text-xl'>Curios About how to build your own ux strategy? Here are five simple steps</p>
            <div className='font-bold text-sm  md:text-2xl items-end flex mr-0'>
                <span className='cursor-pointer'>+</span>
            </div>
        </div>
        <div className='bg-[#05156D] text-white flex p-5 px-7 space-x-4 rounded-md items-center'>
            <p className='font-bold text-sm md:text-xl'>05.</p>
            <p className='font-bold text-sm md:text-xl'>Curios About how to build your own ux strategy? Here are five simple steps</p>
            <div className='font-bold text-sm md:text-2xl items-end flex mr-0'>
                <span className='cursor-pointer'>+</span>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Blog