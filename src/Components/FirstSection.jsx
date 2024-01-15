import React from 'react'
import blueChair from "../assets/Blue-Chair.webp";

const FirstSection = () => {
  return (
    <div className='pt-[70px] flex gap-[292px] max-w-[1321px] mx-auto'>
          <div className='bg-gradient-to-bl from-[#8C939B] to-[#243040] w-[416px] h-[336px] relative'>
              <img src={blueChair} alt="Blue Chair" className='absolute top-[64px] left-[50px] w-[456px] h-[498px]'/>
      </div>
      <div className='mt-[60px]'>
        <div className='flex gap-[11px] items-center'>
          <div className='h-px w-[95px] bg-black'></div>
          <h4 className='text-page-yellow font-pop text-lg '>Welcome Our Story</h4>
        </div>
        <div className='mt-[19px] text-text font-pop text-[35px] font-bold w-[436px] leading-normal'>We create the product you tell us you wish existed.</div>
        <div className='mt-[19px] font-pop text-lg text-black/70 w-[596px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</div>
        <button className='mt-[34px] py-[19px] px-[48px] bg-page-yellow mx-auto text-white text-xl font-semibold'>READ MORE</button>
      </div>
    </div>
  )
}

export default FirstSection
