import React from 'react'
import { topbar } from '../Data'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
    <div className="bg-[#06112a] border-b-[1px] w-full flex justify-center items-center">
        <div className="w-full p-vw max-w-[80vw]">
            {topbar?.map((item, index) => {
                return <main key={index} className="flex justify-between items-center">
                    <section className="flex items-center">
                        <Link to={item?.path} className="flex items-center">
                        <img src="/images/Danhamz_logo.gif" alt="danhamz" className='w-full max-w-[6vw]' />
                        </Link>
                    </section>
                </main>
            })}
        </div>
    </div>
    </>
  )
}

export default Topbar