import React from 'react'
import Flex from './Flex'


const SecHead = ({title,heading,className1,className2,className3,className4,className}) => {
  return (
    <div className={`${className1} text-[#161A2D] `}>
         <Flex className={`items-center gap-2.5 justify-center ${className2}`}>
            <div className={`${className4} w-2 h-2 rounded-full bg-primary  pb-[10x]`}>
            </div>
            <p className='font-semibold '>{title}</p>
        </Flex>
        <h2 className={`text-[48px] font-semibold  w-187.5 text-center mx-auto  ${className3}`}>{heading}</h2>
    </div>
  )
}

export default SecHead
