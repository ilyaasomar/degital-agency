import React from 'react'

const Features = () => {
  return (
    <div className='max-w-[1640px] p-4 py-12 mt-10'>
        {/* top */}
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex items-center gap-3'>
            <div className='w-[60px] h-2 rounded-lg bg-[#05156D]'></div>
            <h5 className="font-semibold text-xl text-[#05156D]">Why Choose Us</h5>
            <div className='w-[60px] h-2 rounded-lg bg-[#05156D]'></div>
            </div>
            <h1 className="font-bold text-4xl text-gray-600">Reason To Choose Us</h1>
            <p className="font-normal text-xl text-gray-600 max-w-[580px] leading-7 text-center">Get the most reduction of your team's operation cost 
                for whole product which creates amazing UI/UX Experience.</p>
        </div>
        {/* cards container*/}
        <div className='grid grid-cols-1 md:grid-cols-3 py-20 gap-10 md:gap-12 '>
        {/* card1 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>01</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Free Icon Plugins</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>
             {/* card2 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>02</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Free 6 Month Support</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>
             {/* card3 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>03</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Customer Strategy</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>
             {/* card4 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>04</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Best Premium Image</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>
             {/* card5 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>05</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Most Advanced Features</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>
             {/* card6 */}
        <div className='shadow-xl rounded-lg bg-gray-100 p-3 px-4 space-y-3 relative'>
        <div className='bg-gray-400 w-10 h-10 rounded-md flex items-center justify-center absolute -top-5'>
        <span className='font-bold text-gray-800 text-lg'>06</span>
        </div>
        <div className='py-3 space-y-2'>
        <h2 className='text-2xl font-semibold text-gray-600'>Very Reasonable Price</h2>
        <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, culpa.</p>
        </div>
        </div>

        </div>
    </div>
  )
}

export default Features