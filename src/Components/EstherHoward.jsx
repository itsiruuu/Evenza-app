import React from 'react'
import icon from '../assets/speaker-author-avatar-icon.png'
import Flex from './Flex'
const EstherHoward = ({className}) => {
  return (
    <>
      <div>
        <Flex className={`${className} gap-2.5 text-[#737681]`}>
          <img src={icon} alt="" /> <span>Esther Howard</span>
        </Flex>

      </div>
    </>
  )
}

export default EstherHoward
