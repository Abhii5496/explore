import React from 'react'

const Hero = () => {
  return (
    <div  className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.pexels.com/photos/732199/pexels-photo-732199.jpeg' alt='img'/>


        <div className='bg-black/50 absolute top-0 left-0 w-full h-screen'>
        </div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>Artistic Nature</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl' >Mesmerizing Parts Of Nature</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'> Natural Beuties to explore all around the world
                </p>
                <button className='bg-white text-black font-bold hover:scale-105 ' >Explore Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero