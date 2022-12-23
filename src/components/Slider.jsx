import React, { useState } from 'react'
import {  BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function Slider() {
    const slides =[
        {url:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
        title:'pizza'},

        {url:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
        title:'egg'
    },

       { 
        url:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
        title:'fruits'
    },

        {url:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
        title:'sandwich'
        }
    ];

    const [current, setCurrent] = useState(0)
    const prev =() =>{
        const isFirst = current ===0
        const newIndex =isFirst ? slides.length-1 : current-1;
        setCurrent(newIndex)
    }
    const next =() =>{
        const islast = current === slides.length-1
        const newIndex =islast ? 0 : current+1;
        setCurrent(newIndex)
    }
    const gotoSlide =(index) =>{
        setCurrent(index)

    }

  return (
    <div className='max-w-[1400px] h-[580px] m-auto py-16 px-4 relative group'>

    <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={
        {backgroundImage:`url(${slides[current].url})`}
    }></div>

    <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prev} size={30}/>
    </div>
    
    <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={next} size={30}/>
    </div>
    <div className='flex top-4 justify-center py-3'>
        {slides.map((slide,index)=>(
            <div className='text-2xl cursor-pointer' key={index} onClick={ () => gotoSlide(index)}>

            <RxDotFilled/>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Slider