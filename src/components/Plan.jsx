import React from 'react'

const Plan = () => {
  return (

    <div className=' max-w-[1400] px-4 py-16 lg:grid-cols-2 gap-4'>
    {/* // left  side */}
        <div className=' grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img  loading='lazy' className='row-span-3
             object-cover w-full h-full p-2'  src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img' />
            <img loading='lazy' className='row-span-2 object-cover w-full h-full p-2'  src='https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img' />
            <img loading='lazy'  className='row-span-2 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img' />
            <img loading='lazy'  className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img' />
            <img loading='lazy'  className='row-span-2  
            object-cover w-full h-full p-2' src='https://images.pexels.com/photos/3472764/pexels-photo-3472764.jpeg?auto=compress&cs=tinysrgb&w=300' alt='img' />
        </div>

        {/* right side */}

        <div className='flex flex-col h-full px-4 justify-center'> 
        <h3 className='text-5xl  md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi ullam quis esse, quos assumenda laborum eum </p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi ullam quis esse, quos assumenda laborum eum </p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl hover:scale-110'> Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl hover:scale-110'> Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan