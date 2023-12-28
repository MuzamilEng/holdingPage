import React from 'react'
import { footer } from '../Data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
    <footer className="w-full bg-white flex justify-center items-center p-3vw">
      <main className='border-t-[1.7px] w-full max-w-[80vw] p-2vw border-blue-900'>
        <div className="w-full">
          {footer?.map((item, index)=> {
            return <section  className='w-full flex items-start' key={index}>
              <div className="">
              <h1 className='text-yellow-600 font-medium text-[1.2vw]'>{item?.title}</h1>
                {item?.Links?.map((link, index)=> (
                  <main className='flex' key={index}>
                    <Link to={link?.url} className='flex mt-0.3vw hover:underline items-center'>
                      <span className='text-vw text-blue-900'>{link?.icon}</span>
                      <span className={`text-[.9vw] ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
              </div>
         <div className=" ml-3vw -mt-[1.2vw]">
         <h1 className='text-yellow-600 font-medium mt-vw text-[1.2vw]'>{item?.find}</h1>
                {item?.social?.map((link, index)=> (
                  <main className='flex' key={index}>
                    <Link to={link?.url} className='flex mt-0.3vw hover:underline items-center'>
                      <span className='text-vw text-blue-900'>{link?.icon}</span>
                      <span className={`text-[.9vw] ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
         </div>
            </section>
          })}
        </div>
      </main>
    </footer>
        <div className="w-full p-2vw bg-[#06112a]">
          <p className='text-[0.8vw] text-yellow-600 cursor-pointer'>© Home of Property Ltd trading as Danhamz 2022 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer