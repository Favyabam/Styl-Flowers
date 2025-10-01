import React from 'react'
import { assets } from '../assets/assets';
import About from '../components/About';
import Info from '../components/Info';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Review from '../components/Review';


const Home = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center' style={{ backgroundImage: `url(${assets.home})`}}>
        <div className='max-w-4xl w-full'>
          <h3 className='text-3xl md:text-6xl pl-15 font-bold text-gray-800 sm:text-[6rem]'>Fresh Flowers</h3>
          <span className='block text-xl md:text-xl font-semibold text-pink-500 pl-15 py-4'>Bringing Nature's Beauty to Your Doorstep 🌸</span>
          <p className='text-lg font-medium md:text-xl pl-15 text-gray-500'>Fresh, hand-picked flowers for every occasion from heartfelt surprises to timeless celebrations.</p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm cursor-pointer sm:text-base ml-15 mt-6">
            Shop Now
          </button>
        </div>
      </div>
      <About />
      <Info />
      <Product />
      <Review />
      <Contact />
    </>
  )
}

export default Home
