import React from 'react'
import { Cart, NavSofa, Search } from './svg'
import "../assets/Nav.css"

const Nav = () => {
  return (
    <>
        <div className='pt-[15px] flex justify-between items-center'>
              <div className='flex items-center'>
                  <NavSofa />
                  <span className='text-white font-rob font-bold text-[33px] cursor-pointer'>FURNITURE</span>
              </div>
              <div className='flex gap-[55px] items-center text-white'>
                  <a className='font-rob text-lg font-normal' href="#">HOME</a>
                  <a className='font-rob text-lg font-normal' href="#">ABOUT US</a>
                  <a className='font-rob text-lg font-normal' href="#">SHOP</a>
                  <a className='font-rob text-lg font-normal' href="#">CONTACT US</a>
                  <div className='flex gap-6 items-center'>
                      <a href="#"><Search /></a>
                      <a href="#"><Cart /></a>
                  </div>
              </div>
          </div>
          <div className='mt-[164px] w-3/4 mx-auto'>
              <h1 className='text-center text-white font-pop text-5xl font-bold drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] leading-normal'>Awesome Design Best Furniture For Your Interior</h1>
              <p className='text-center text-white font-pop text-xl mt-[15px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
          </div>
          <div className='flex justify-center mt-[51px]'>
              <button className='py-[19px] px-[48px] bg-page-yellow text-white text-xl font-semibold '>SHOP NOW</button>
          </div>
    </>
  )
}

export default Nav
