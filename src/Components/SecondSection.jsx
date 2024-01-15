import React from 'react'
import List1 from "../assets/list1.webp";
import List2 from "../assets/list2.webp";
import List3 from "../assets/list3.webp";
import List4 from "../assets/list4.webp";
import List5 from "../assets/list5.webp";
import List6 from "../assets/list6.webp";
import { Star } from './svg';

const SecondSection = () => {
  return (
    <div className='max-w-[1321px] mx-auto mt-[150px]'>
                    <div className='flex items-center gap-[11px]'>
                        <div className='h-px w-[95px] bg-black'></div>
                        <h4 className='text-page-yellow font-pop text-lg '>Shopping Store</h4>
          </div>
          <div className='flex justify-between'>
              <div className='mt-[19px] text-text font-pop text-[35px] font-bold'>Our Products</div>
              <button className='py-[19px] px-[48px] bg-page-yellow text-white text-xl font-semibold '>VIEW ALL PRODUCT</button>
          </div>
          <div className='flex justify-between mt-[97px] gap-[27px]'>
        <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={List1} alt="Sofa One" className='w-full' />
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
          <img src={List2} alt="Sofa One" className='w-full' />
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
          <img src={List3} alt="Sofa One" className='w-full' />
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
          </div>
          <div className='flex justify-between mt-[60px] gap-[27px]'>
              <div className='p-[18px_23px_56px_23px] flex flex-col transition linear duration-300 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)]'>
          <img src={List4} alt="Sofa One" className='w-full' />
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
          <img src={List5} alt="Sofa One" className='w-full' />
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
          <img src={List6} alt="Sofa One" className='w-full' />
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
          </div>
    </div>
  )
}

export default SecondSection
