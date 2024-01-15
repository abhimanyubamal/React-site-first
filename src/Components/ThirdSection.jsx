import React from 'react'
import Rect1 from "../assets/rect1.webp";
import Rect2 from "../assets/rect2.webp";

const ThirdSection = () => {
  return (
    <div className='max-w-[1321px] mx-auto mt-[120px]'>
          <div className='flex justify-between gap-[36px]'>
              <div className='relative'>
                  <img src={Rect1} alt="First of two sofa images with lamp" className='w-full' />
                  <div className='absolute top-0 left-0 w-full h-full'>
                      <div className='mt-[32px] flex gap-3 items-center'>
                          <div className='h-px w-[95px] bg-black'></div>
                          <span className='font-pop text-xl'>Festival Offer</span>
                      </div>
                      <div className='ml-[107px]'>
                          <div className='mt-[20px] fon-pop text-[35px] font-bold leading-normal text-page-yellow'>Upto 40% Off</div>
                          <p className='mt-[15px] font-pop text-lg leading-normal text-black/70 w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <button className='mt-[38px] p-[10px_13px] text-white text-xl font-medium font-pop bg-page-yellow'>ADD TO CART</button>
                      </div>
                  </div>
              </div>
              <div className='relative'>
                  <img src={Rect2} alt="First of two sofa images with lamp" className='w-full' />
                  <div className='absolute top-0 left-0 w-full h-full'>
                      <div className='mt-[32px] flex gap-3 items-center'>
                          <div className='h-px w-[95px] bg-black'></div>
                          <span className='font-pop text-xl'>Festival Offer</span>
                      </div>
                      <div className='ml-[107px]'>
                          <div className='mt-[20px] fon-pop text-[35px] font-bold leading-normal text-page-yellow'>Upto 40% Off</div>
                          <p className='mt-[15px] font-pop text-lg leading-normal text-black/70 w-[262px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                          <button className='mt-[38px] p-[10px_13px] text-white text-xl font-medium font-pop bg-page-yellow'>ADD TO CART</button>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default ThirdSection
