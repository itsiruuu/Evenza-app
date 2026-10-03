import React from 'react'
import EstherHoward from './EstherHoward'
import Flex from './Flex'
import arrooww from '../assets/stories-card-arrow-icon.png'

const UpdateCard2 = ({iuhiu}) => {
  return (
    <>
      <div className='mt-20 bg-[#F6F6F7] w-180.25 rounded-[20px]  '>
        <Flex>
          <div>
            <img className='p-2.5' src={iuhiu} alt="" />
          </div>
          <div>
            <EstherHoward className='mt-12.5 ml-[30px] ' />
            <h3 className='text-[20px] font-bold text-[#161A2D] w-[256px] ml-7.5 mt-5.25 mb-20'>Simple Self-Defense Skills
              Everyone Should Learn for
              Safety</h3>
            <div className='border-t-2 border-[#00000036] ml-7.5'></div>
            <div>
              <Flex className='gap-2.5 mt-8 ml-7.5'>
                <a className='font-bold text-primary ' href="#">Read More</a> <img src={arrooww} alt="" />
              </Flex>
            </div>
          </div>
        </Flex>

      </div>

    </>
  )
}

export default UpdateCard2
