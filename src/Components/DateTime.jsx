import React from 'react'
import Container from './Container'
import iconLocation from "../assets/schedule-location-icon.png"

const DateTime = ({
    Img,
    TimeText,
    TimeHeaLine,
    TimeIntudraction,
    TimeP
}) => {
    return (
        <div>
            <Container>

                <div className='flex text-white items-center justify-between leading-6.5 mt-10'>

                    <div className='flex items-center gap-7.5 '>
                        <img src={Img} alt="" />
                        <div>
                            <h3 className='text-[20px] font-bold '>{TimeText}</h3>
                            <p>{TimeP}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className='text-[20px] font-bold'>{TimeHeaLine}</h3>
                        <p className='w-136.25'>{TimeIntudraction}</p>
                    </div>

                    <div className='flex items-center gap-3.75'>
                        <div className='border p-3.75 rounded-[25px]'>
                            <img src={iconLocation} alt="" />
                        </div>
                        <div>
                            <p>Street, Block 12</p>
                            <p>Sector 4, Ipsum City</p>
                        </div>
                    </div>

                </div>

                <div className="w-full h-px bg-white/20 mt-10"></div>

            </Container>
        </div>
    )
}

export default DateTime