import React from 'react'
import Flex from './Flex'

const Day = () => {
    return (
        <>
            <div className='w-125.25 bg-[#ffffff23] rounded-full p-2.5 flex justify-between cursor-pointer mx-auto my-26.75'>
                <div className='group py-4.25 px-9.25 rounded-full hover:bg-white transition-all duration-300'>
                    <h3 className='font-bold text-[20px] text-white group-hover:text-primary'>Day 01</h3>
                </div>

                <div className='group py-4.25 px-9.25 rounded-full hover:bg-white transition-all duration-300'>
                    <h3 className='font-bold text-[20px] text-white group-hover:text-primary'>Day 02</h3>
                </div>

                <div className='group py-4.25 px-9.25 rounded-full hover:bg-white transition-all duration-300'>
                    <h3 className='font-bold text-[20px] text-white group-hover:text-primary'>Day 03</h3>
                </div>
            </div>
        </>
    )
}

export default Day
