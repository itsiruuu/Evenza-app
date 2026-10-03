import React from 'react'
import Link from "../assets/speakers-card-link-icon.png"
import Flex from './Flex'


const SpeakersCard = ({ ImgSrc, cardText, CardP }) => {
    return (
        <>
            <div className='w-117.75 bg-[#F6F6F7] rounded-[20px]'>
                <div className='p-2.5'>
                    <img src={ImgSrc} alt="" />
                </div>
                <Flex className="pt-6.5 px-10 pb-8 justify-between">
                    <div>
                        <h3 className='text-[20px] font-bold text-[#161A2D] pb-1'>{cardText}</h3>
                        <p className='text-[#737681]'>{CardP}</p>
                    </div>
                    <div>
                        <img src={Link} alt="" />
                    </div>
                </Flex>
            </div>
        </>
    )
}

export default SpeakersCard
