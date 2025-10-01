import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
  <section id='about' className='py-8 px-4 sm:px-8 bg-white'>
    <div className='flex justify-center'>
            <h1 className='text-4xl font-bold bg-pink-100 text-center mb-12 w-full max-w-[69rem] py-4'>
        <span className='text-pink-500'>About</span> <span className='text-gray-900'>Us</span>
      </h1>
    </div>
    <div className='flex flex-wrap items-center pl-12 gap-8 pb-12'>
        <div className='relative flex-1 min-w-[300px] max-w-[640px]'>
            <img src={assets.about} alt="" className='w-[800px] h-[500px] object-cover border-[1.5rem] border-white rounded-md shadow-md' />
            <h3 className='absolute top-1/2 left-0 transform -translate-y-1/2 w-full text-center bg-white text-3xl font-semibold py-4 px-6 mix-blend-screen'>
            Best FLowers Sellers</h3>
        </div>

        <div className='flex-1 min-w-[300px] max-w-[640px]'>
            <h3 className='text-3xl font-bold text-gray-800 mb-4'>
                Why choose us?
            </h3>
            <p className='text-lg text-gray-500 leading-relaxed mb-4'>
                At Styl flowers🌸, we believe flowers tell stories of love, joy, and celebration. Every bouquet is handpicked with care and delivered fresh to brighten your special moments. We’re here to share smiles, one blossom at a time.
            </p>
            <p className='text-lg text-gray-500 leading-relaxed mb-6'>
                Our passion is making every order feel personal crafted with attention to detail and delivered with love, so your moments become memories
            </p>
            <a href="#" className='inline-block bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition'>
                Learn More
            </a>
        </div>
    </div>
    </section>
  )
}

export default About


