import React from 'react'
import Link from '../assets/stories-feature-card-image.png'
import EstherHoward from './EstherHoward'
import arrooww from '../assets/stories-card-arrow-icon.png'
import Flex from './Flex'
const UpdateCard1 = () => {
    return (
        <>
            <div className='w-180.25 bg-[#F6F6F7] mt-20'>
                <div>
                    <img className='px-2.5 pt-2.5' src={Link} alt="" />
                    <div className='px-10 pt-7.5'>
                        <EstherHoward />
                    </div>
                    <div className='p-10'>
                        <h3 className=' mb-3.5 text-[#161A2D] text-[20px] font-bold'>Mastering Public Speaking: Expert Tips for Confident Presentations</h3>
                        <p className='mb-8 text-[#737681]'>Improve your communication skills with proven techniques used by world-class speakers to captivate and inspire audiences.</p>
                        <div className='border-t-2 border-[#00000036]'></div>
                        <div>
                            <Flex className='gap-2.5 mt-8'>
                                <a className='font-bold text-primary '  href="#">Read More</a> <img src={arrooww} alt="" />
                            </Flex>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateCard1
