import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-200 mx-auto pt-16 my-20 lg:mb-[20%] md:mb-[30%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='font-bold text-5xl'>Fine Interior</h3>
            <p className='pt-4 text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi ullam .
            </p>
        </div>
        
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img loading='lazy' className='object-cover w-full h-full' src='https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'/>
            <img loading='lazy' className='row-span-2 object-cover w-full h-full' src='https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'/>
            <img loading='lazy' className='object-cover w-full h-full' src='https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'/>
        </div>
    </div>
  )
}

export default Rooms