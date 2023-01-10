import React,{useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
    const [nav, setnav] = useState(false)

   const handleNav =() => {
        setnav(!nav)
    };
    if(nav){
        document.body.style.overflow ='hidden'
    } else {
        document.body.style.overflow= 'scroll'
    }
    


  return (
    <div className='fixed z-50 w-full flex justify-between p-4 items-centrer'>
        <h1 className=' text-blue-700 font-bold text-2xl z-20'>Explore</h1>
        <HiMenuAlt3 onClick={handleNav} className='text-blue-700 cursor-pointer z-20 hover:scale-125' size={23}/>
        <div className={
            nav 
            ?'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top 0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col fixed w-full h-full justify-center
            items-center'>
                <li className='cursor-pointer font-bold text-3xl p-8 hover:scale-150 hover:text-green-500 active:text-blue-700'>Home</li>
                <li className='cursor-pointer font-bold text-3xl p-8 hover:scale-150 hover:text-green-500 active:text-blue-700'>Destinations</li>
                <li className='cursor-pointer font-bold text-3xl p-8 hover:scale-150 hover:text-green-500 active:text-blue-700'>Amenities</li>
                <li className='cursor-pointer font-bold text-3xl p-8 hover:scale-150 hover:text-green-500 active:text-blue-700'>Reservation</li>
                <li className='cursor-pointer font-bold text-3xl p-8 hover:scale-150 hover:text-green-500 active:text-blue-700'>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar