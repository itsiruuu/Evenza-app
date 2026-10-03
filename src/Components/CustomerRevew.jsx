import React from 'react'
import Flex from './Flex'
import Img from '../assets/testimonial-customer-avatar.png'
const CustomerRevew = ({revewImg}) => {
    return (
        <>
            <div className='bg-[#ffffff1c]  mt-20 rounded-[20px]'>
                <div className='p-10'>
                    <div className="text-primary flex gap-1">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className='font-semibold text-white mt-5.75 mb-17.5'>"Truly outstanding service! The team exceeded our
                        expectations with their professionalism, creativity,
                        and quick turnaround time. Highly recommended for
                        anyone seeking quality and reliability."</p>

                    <div className='border-t-2 border-[#ffffff1c]'>

                    </div>

                    <div className='mt-13.25'>
                        <Flex className='gap-2 items-center'>
                            <img src={revewImg} alt="" />
                            <div className='text-white'>
                                <h3 className='text-[20px] font-bold '>Ralph Edwards</h3>
                                <p className='w-47.5'>GlobalMarketing Director</p>
                            </div>
                            <div className='ml-42'>
                                <img src={Img} alt="" />
                            </div>
                        </Flex>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerRevew
