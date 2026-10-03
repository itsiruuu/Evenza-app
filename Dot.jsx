import React from 'react'

const Dot = ({ className,dotText }) => {
    return (
        <div>
            <Flex className="items-center gap-1.5 justify-center">
                <div className='w-2 h-2 rounded-full bg-white'>
                </div>
                <p className='font-semibold text-white' >{dotText}</p>
            </Flex>
        </div>
    )
}

export default Dot
