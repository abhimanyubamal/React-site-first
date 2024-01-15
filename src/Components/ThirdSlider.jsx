import React from 'react'
import Slider from "react-slick";
import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";
import Slider4 from "../assets/slider4.png";
import Slider5 from "../assets/slider5.png";
import Slider6 from "../assets/slider6.png";
import Slider7 from "../assets/slider7.png";

const ThirdSlider = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
    };

  return (
    <div className='mt-[109px] max-w-[1321px] mx-auto'>
      <div className='flex items-center gap-[11px]'>
                        <div className='h-px w-[95px] bg-black'></div>
                        <h4 className='text-page-yellow font-pop text-lg '>Customer Says</h4>
          </div>
          <h2 className='text-text font-pop text-[35px] leading-normal'>Testimonials</h2>
          <Slider {...settings}>
              <img src={Slider1} alt="slider images" className='w-[108px] h-[132px] rotate-[4.609deg] shadow-[0px_50px_50px_rgba(195,176,169,0.30)]' />
              <img src={Slider2} alt="slider images" className='w-[115,3134px] h-119.489px] rotate-[29.257deg] shadow-[0px_50px_50px_rgba(118,68,35,0.30)]' />
              <img src={Slider3} alt="slider images" className='w-[76px] h-[77px] rotate-[4.609deg] shadow-[0px_50px_50px_rgba(49,173,234,0.30)]' />
              <img src={Slider4} alt="slider images" className='w-[116px] h-[134px] shadow-[0px_50px_50px_rgba(0,0,0,0.04)]' />
              <img src={Slider5} alt="slider images" className='w-[92px] h-[129px] shadow-[0px_50px_50px_rgba(131,121,84,0.30)]' />
              <img src={Slider6} alt="slider images" className='w-[83px] h-[102px] shadow-[0px_50px_50px_rgba(43,43,43,0.30)]' />
              <img src={Slider7} alt="slider images" className='w-[116px] h-[136px] shadown-[0px_50px_50px_rgba(110,52,37,0.30)]' />
              <img src={Slider1} alt="slider images" className='w-[108px] h-[132px] rotate-[4.609deg] shadow-[0px_50px_50px_rgba(195,176,169,0.30)]' />
              <img src={Slider2} alt="slider images" className='w-[115,3134px] h-119.489px] rotate-[29.257deg] shadow-[0px_50px_50px_rgba(118,68,35,0.30)]' />
              <img src={Slider3} alt="slider images" className='w-[76px] h-[77px] rotate-[4.609deg] shadow-[0px_50px_50px_rgba(49,173,234,0.30)]' />
              <img src={Slider4} alt="slider images" className='w-[116px] h-[134px] shadow-[0px_50px_50px_rgba(0,0,0,0.04)]' />
              <img src={Slider5} alt="slider images" className='w-[92px] h-[129px] shadow-[0px_50px_50px_rgba(131,121,84,0.30)]' />
              <img src={Slider6} alt="slider images" className='w-[83px] h-[102px] shadow-[0px_50px_50px_rgba(43,43,43,0.30)]' />
              <img src={Slider7} alt="slider images" className='w-[116px] h-[136px] shadown-[0px_50px_50px_rgba(110,52,37,0.30)]' />
          </Slider>
    </div>
  )
}

export default ThirdSlider
