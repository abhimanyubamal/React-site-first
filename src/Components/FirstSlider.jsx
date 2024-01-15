import React from 'react'
import Slider from "react-slick";
import { LeftArrow, RightArrow, Star } from './svg';
import Sofa1 from "../assets/Sofa1.webp";
import Sofa2 from "../assets/Sofa2.webp";
import Sofa3 from "../assets/Sofa3.webp";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./FirstSlider.css"


const FirstSlider = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1.065
  };

  const slider = React.useRef(null);

  return (
      <section className='relative mt-[329px] z-99 bg-page-grey about-slider flex overflow-x-hidden'>
          <div className='absolute w-[750px] h-[300px] bg-gradient-to-b from-[#243040] to-[#8B929B] right-0 top-0'></div>
          <div className='max-w-[1321px]r mx-auto pb-[98px]'>
                <div className='mt-[40px] relative z-2'>
                    <div className='flex items-center gap-[11px]'>
                        <div className='h-px w-[95px] bg-black'></div>
                        <h4 className='text-page-yellow font-pop text-lg '>Shopping Store</h4>
                    </div>
                    <div className='mt-[29px] text-text font-pop text-[35px] font-bold w-[436px]'>Buy trending furniture Products.</div>
                    <div className='mt-[19px] font-pop text-lg text-black/70 w-[443px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta</div>
                    <div className='mt-[39px] flex gap-[14px]'>
                        <button onClick={() => slider?.current?.slickPrev()} className='w-[41px] h-[41px] rounded-[10px] bg-white flex items-center justify-center'><LeftArrow /></button>
                        <button onClick={() => slider?.current?.slickNext()} className='w-[41px] h-[41px] rounded-[10px] bg-white flex items-center justify-center'><RightArrow /></button>
                    </div>
                  </div>
      </div>
      <div className=' w-[70%] mt-[70px]' >
           <Slider ref={slider} {...settings} >
                    <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa1} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa2} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa3} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa1} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                    </div>
                    <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa1} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa2} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa3} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                </div>
                <div className='p-[15px_12px_7px_17px] bg-white flex flex-col'>
                        <img src={Sofa1} alt="Brown Wooden Sofa" className='w-full' />
                        <div className='mt-[13px] flex justify-between'>
                            <span className='font-pop text-xl font-medium'>Single Sofa</span>
                            <span className='flex'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                        </span>
                    </div>
                    <div className='mt-[8px] flex gap-[7px] items-center'>
                            <span className='font-pop text-[28.667px] font-semibold'>₹1200.00</span>
                            <span className='font-pop text-[#C4C4C4] text-[11.368px]'>₹1200.00</span>
                        </div>
                    </div>
          </Slider>
      </div>
      
         </section>
  )
}

export default FirstSlider
