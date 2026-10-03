import React from 'react'
import ideas from '../assets/landing-event-ideas-icon.png'
import Flex from './Flex'
const Ideas = () => {
    return (
        <>
        


        <div className='p-2.5  backdrop-blur-sm w-62.5 rounded-full mx-auto mt-35.5 mb-3.75'>
            <Flex className="gap-2">
                <div>
                    <img src={ideas} alt="" />
                </div>

                <p className='text-white text-[14px] font-semibold'>Ideas that spark change.</p>
            </Flex>
         </div>

        </>
    )
}

export default Ideas
