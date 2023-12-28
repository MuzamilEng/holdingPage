import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider } from '../Data';

const Sliders = () => {
    const settings = { dots: false, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };
  return (
    <div>
        <section className='w-full'>
                <Slider {...settings}>
                  {slider?.map((item, index) => (
                    <div key={index} className='w-full relative'>
                    <img src={item?.img} alt={`slide-${index}`} style={{opacity: 0.8, zIndex: -1}} className="w-full h-[30vw]" loading="lazy" />
                    <div className="absolute top-[10vw] left-[2vw] flex w-full justify-center items-center flex-col">
                    <h1 className=" italic text-3vw text-[#06112a] font-medium">{item?.title}</h1>
                    <p className="italic w-full mt-vw text-center max-w-[60vw] text-[1.3vw] text-[#06112a] font-semibold">{item?.info}</p>
                    </div>
                    </div>
                  ))}
                </Slider>
              </section>
    </div>
  )
}

export default Sliders