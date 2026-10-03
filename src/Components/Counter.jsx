import React, { useState } from 'react'
import Flex from './Flex'

import { countDownDateAndTime } from 'countdown-date-time';
import { useEffect } from 'react';

const Counter = () => {
  const conduct_date = '2026-12-25 12:00:00';
  let [count,setCount] = useState({})

  
  useEffect(()=>{
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown)
    }, 1000);
  },[])

  
  return (
    <>
      <Flex className='justify-center gap-7.5 mt-10'>
        <div className='px-6.5 pt-5.25 pb-6.75 text-white rounded-[20px] backdrop-blur-xl w-31.25 text-center'>
          <h2 className='text-[40px] font-bold'>{count.days}</h2>
          <p>Days</p>
        </div>
        <div className='px-6.5 pt-5.25 pb-6.75 text-white rounded-[20px] backdrop-blur-xl w-31.25 text-center'>
          <h2 className='text-[40px] font-bold'>{count.hours}</h2>
          <p>Hours</p>
        </div>
        <div className='px-6.5 pt-5.25 pb-6.75 text-white rounded-[20px] backdrop-blur-xl w-31.25 text-center'>
          <h2 className='text-[40px] font-bold'>{count.minutes}</h2>
          <p>Minutes</p>
        </div>
        <div className='px-6.5 pt-5.25 pb-6.75 text-white rounded-[20px] backdrop-blur-xl w-31.25 text-center'>
          <h2 className='text-[40px] font-bold'>{count.seconds}</h2>
          <p>Seconds</p>
        </div>
      </Flex>
    </>
  )
}

export default Counter
