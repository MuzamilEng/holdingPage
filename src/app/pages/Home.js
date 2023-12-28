import React from 'react'
import Layout from '../Layout/Layout'
import { socialMedia } from '../Data'
import { Link } from 'react-router-dom'
import Sliders from '../Component/Sliders';


const Home = () => {
  return (
    <>
    <Layout>
      <main className="w-full">
        <article className="w-full flex flex-col justify-center items-center relative">
          <img src="/images/hero_image.jpeg" alt="danhamz" className='w-full' />
          <div className="-mt-[10vw] bg-[#06112a] w-full max-w-[45vw] p-vw rounded-md flex flex-col justify-center items-center">
            <h1 className="text-yellow-600 text-2vw font-semibold">Believe in finding it</h1>
            <p className='text-white mt-vw text-[1.2vw] font-medium'>Follow us on social media to stay up to date</p>
            <div className="flex items-center mt-vw w-full max-w-[35vw] border-[1px] border-yellow-600 p-vw rounded-md justify-evenly">
              {socialMedia?.map((item, index) => {
                return <Link to={item?.url} key={index} className="flex flex-col items-center">
                  <span className='text-[2vw]'>{item?.icon}</span>
                  <span className='text-white mt-0.5vw text-vw font-medium'>{item?.title}</span>
                </Link>
              })}
            </div>
          </div>
        </article>
        <section className='flex justify-center mt-3vw items-center h-[5vw] ml-4vw w-full max-w-[90vw] bg-[#e5f1ee] rounded-xl p-vw'>
          <div className='flex justify-between items-center w-full'>
            <article>
              <p className='text-[#06112a] font-semibold text-[1.3vw] '>What we do?</p>
              <p className='text-black font-medium text-vw '>Save properties, create alerts and keep track of the enquiries you send to agents.</p>
            </article>
            <Link to='https://www.zoopla.co.uk/to-rent/branch/danhamz-leeds-18088/' className='border-yellow-600 border-[1px] text-black hover:text-gray-800 text-vw font-medium p-[0.7vw] rounded-md'>View all properties</Link>
          </div>
        </section>
        <article className='w-full mt-2vw'>
          <Sliders />
        </article>
      </main>
    </Layout>
    </>
  )
}

export default Home

// rgba(0, 0, 0, 0.1) !important