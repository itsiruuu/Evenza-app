import React from 'react'
import DateTime from './DateTime'
import client from '../assets/schedule-speaker-one.png'
import client2 from '../assets/schedule-speaker-two.png'
import client3 from '../assets/schedule-speaker-three.png'
import client4 from '../assets/schedule-speaker-four.png'

const Time = () => {
    return (
        <>
            <DateTime Img={client} TimeText="9:00 AM - 5:30 PM" TimeHeaLine="Professional One Skills Development Workshop" TimeIntudraction='Unlock your potential and elevate your career with our Professional Skills
            Development designed students, working professionals.' TimeP="22 March 2025"
            />
            <DateTime Img={client2} TimeText="10:00 AM - 4:00 PM" TimeHeaLine="Leadership & Growth Conference" TimeIntudraction='Unlock your potential and elevate your career with our Professional Skills
            Development designed students, working professionals.' TimeP="05 May 2025"
            />
            <DateTime Img={client3} TimeText="8:30 AM - 6:00 PM" TimeHeaLine="Digital Marketing Masterclass" TimeIntudraction='Unlock your potential and elevate your career with our Professional Skills
            Development designed students, working professionals.' TimeP="20 June 2025"
            />
            <DateTime Img={client4} TimeText="11:00 AM - 3:00 PM" TimeHeaLine="Annual Innovation Summit 2025" TimeIntudraction='Unlock your potential and elevate your career with our Professional Skills
            Development designed students, working professionals.' TimeP="10 April 2025"
            />
        </>
    )
}

export default Time
