import React from 'react'
import Slider from "react-slick";
import S1 from "../assets/s1.webp";
import S2 from "../assets/s2.webp";
import S3 from "../assets/s3.webp";
import { LeftArrow, RightArrow, Star } from './svg';

const SecondSlider = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1.1
    };
    
    const slider = React.useRef(null);

  return (
      <div className=' max-w-[1321px] mx-auto second-slider pt-[110px]'>
          <div className='flex items-center gap-[11px]'>
                        <div className='h-px w-[95px] bg-black'></div>
                        <h4 className='text-page-yellow font-pop text-lg '>Shopping Store</h4>
          </div>
          <div className='flex justify-between'>
              <div className='mt-[19px] text-text font-pop text-[35px] font-bold'>Our Products</div>
              <div className='flex justify-between gap-[12px]'>
                  <button onClick={() => slider?.current?.slickPrev()} className='w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-[2px_7px_16px_rgba(0,0,0,0.08)]'><LeftArrow /></button>
                  <button onClick={() => slider?.current?.slickNext()} className='w-[50px] h-[50px] rounded-full flex justify-center items-center shadow-[2px_7px_16px_rgba(0,0,0,0.08)]'><RightArrow /></button>
              </div>
          </div>
          <div className='mt-[66px]'>
              <Slider ref={slider} {...settings}> 
                  <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S1} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
                  </div>
                  <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S2} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
              </div><div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S3} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
                  </div>
                  <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S1} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
                  </div>
                  <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S2} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
              </div><div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={S3} alt="Sofa One" className='w-full' />
            <div className='mt-[19px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
          </div>
          <p className='mt-[16px] text-black/70 font-pop text-lg'>Lorem ipsum dolor </p>
          <div className='flex justify-between'>
            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
            <button className='p-[10px_13px] bg-page-yellow font-pop text-xl font-medium text-white'>ADD TO CART</button>
          </div>
              </div>
              </Slider>
          </div>
      
    </div>
  )
}

export default SecondSlider
