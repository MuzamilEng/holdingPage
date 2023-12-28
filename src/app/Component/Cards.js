import React from 'react'
import { propertyCard } from '../Data'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Cards = () => {
  return (
    <div>
        <div className="grid grid-cols-3 gap-5">
            {propertyCard?.map((item, index) => {
              return <div key={index} className="w-full max-w-[22vw] border-[1px] rounded-xl shadow-lg">
                <img src={item?.img} alt="danhamz" className='w-full rounded-t-xl h-[12vw]' />
               <div className="p-vw h-[12vw] cursor-pointer relative">
               <p className='text-black font-semibold text-vw mt-1'>{item?.title}</p>
                <p className='text-black text-vw mt-1'>{item?.desc}</p>
                <Link to={'/'} className='absolute left-vw bottom-vw text-yellow-600 text-vw font-medium flex items-center'>{item?.more} <Icon className='text-yellow-600 text-[1.4vw] ml-0.5vw' icon="carbon:arrow-right" /></Link>
               </div>
              </div>
            })}
          </div>
    </div>
  )
}

export default Cards