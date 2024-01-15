import React from 'react'
import GreySofa from "../assets/greySofa.webp";

const CushionSection = () => {
  return (
    <div className='relative bg-[rgba(45,57,73,0.04)] pt-[75px] pb-[103px] z-1 overflow-x-hidden'>
        <div className='max-w-[1321px] mx-auto'>
            <div className='flex items-center gap-[11px]'>
                        <div className='h-px w-[95px] bg-black'></div>
                        <h4 className='text-page-yellow font-pop text-lg '>Shopping Store</h4>
              </div>
              <h2 className='text-text font-pop font-bold w-[436px] text-[35px] leading-normal mt-[24px]'>Wooden Sofa Starts From ₹1200.00</h2>
              <button className='mt-[53px] p-[19px_48px] bg-page-yellow text-white font-pop text-xl font-semibold'>SHOP NOW</button>
          </div>
          <div className='absolute z-1 w-[741px] h-[270px] bg-text left-[61%] top-[55%]'></div>
          <div className='absolute top-[13%] left-[42%] w-1/2 h-full z-3'>
              <img src={GreySofa} alt="grey colored sofa" />
          </div>
    </div>
  )
}

export default CushionSection
