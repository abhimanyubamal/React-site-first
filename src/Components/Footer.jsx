import React from 'react'
import { Facebook, Insta, NavSofa, Twitter } from './svg'

const Footer = () => {
  return (
    <div className='bg-[#243040]'>
        <div className='max-w-[1321px] mx-auto flex justify-between pt-[87px]'>
              <div className='flex flex-col'>
                  <span className='flex items-end font-rob text-[33.023px] font-bold text-white'><NavSofa /> FURNITURE</span>
                  <p className='mt-[30.47px] text-white font-rob text-sm w-[338px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                  <div className='mt-[23px] flex gap-[11.8px]'>
                      <span className='transition linear duration-300 hover:-translate-y-2'><Insta /></span>
                      <span className='transition linear duration-300 hover:-translate-y-2'><Twitter /></span>
                      <span className='transition linear duration-300 hover:-translate-y-2'><Facebook /></span>
                  </div>
              </div>
              <div className='flex gap-[63px]'>
                  <div className='text-white font-rob text-sm'>
                      <h3 className='font-medium after:content-[""] after:block after:h-px after:bg-page-yellow after:w-[138px] after:-bottom-[4px]'>ABOUT STORE</h3>
                      <ul className='mt-[19px] flex flex-col gap-[13px] font-normal'>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Shop</a></li>
                          <li><a href="#">Product</a></li>
                          <li><a href="#">Festival Offer</a></li>
                          <li><a href="#">Log In</a></li>
                      </ul>
                  </div>
                  <div className='text-white font-rob text-sm'>
                      <h3 className='font-medium after:content-[""] after:block after:h-px after:bg-page-yellow after:w-[138px] after:-bottom-[4px]'>BRANDS</h3>
                      <ul className='mt-[19px] flex flex-col gap-[13px] font-normal'>
                          <li><a href="#">Album</a></li>
                          <li><a href="#">Shop</a></li>
                          <li><a href="#">Product</a></li>
                          <li><a href="#">Festival Offer</a></li>
                          <li><a href="#">Log In</a></li>
                      </ul>
                  </div>
                  <div className='text-white font-rob text-sm'>
                      <h3 className='font-medium after:content-[""] after:block after:h-px after:bg-page-yellow after:w-[138px] after:-bottom-[4px]'>CATEGORIES</h3>
                      <ul className='mt-[19px] flex flex-col gap-[13px] font-normal'>
                          <li><a href="#">Single</a></li>
                          <li><a href="#">Aleeper Sofas</a></li>
                          <li><a href="#">Aleeper Chairs</a></li>
                          <li><a href="#">Festival Offer</a></li>
                          <li><a href="#">Log In</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='h-px w-full bg-white/50 mt-[81.1px]'></div>
          <div className='pt-[29px] pb-[27px] flex justify-center items center'>
              <span className='font-rob text-sm text-white'>@copyright2021</span>
          </div>
    </div>
  )
}

export default Footer
