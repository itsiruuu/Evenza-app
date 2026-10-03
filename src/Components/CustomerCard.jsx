import React from 'react'
import Img from '../assets/testimonial-featured-customer.png'

const CustomerCard = () => {
  return (
    <>
      <div className='group w-86.5 h-100 bg-primary rounded-[20px] text-white mt-20 
                      transition-all duration-500 ease-in-out 
                      hover:bg-[#1a1a1a] hover:-translate-y-2 hover:shadow-2xl'>

        <div className='p-10'>
          
          <div className='transition-transform duration-500 group-hover:scale-105'>
            <img src={Img} alt="" />
          </div>

          <p className='mt-4.25 mb-22.25 transition-all duration-500 group-hover:text-gray-200'>
            Over 15,000+ Attendees Connected Worldwide
          </p>

          <h3 className='text-[20px] font-bold transition-all duration-500 group-hover:tracking-wide'>
            Client Experience Speak For Themselves
          </h3>

          <button className=' cursor-pointer my-10 py-4 px-6 bg-white text-primary font-bold rounded-full
                             transition-all duration-500 ease-in-out
                             group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-105'>
            View All Reviews
          </button>

        </div>
      </div>
    </>
  )
}

export default CustomerCard