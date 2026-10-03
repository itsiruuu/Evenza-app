import React from 'react'

const Button = ({children}) => {
  return (
    <button className='py-3.5 px-6.25 bg-primary  text-white text-[16px] font-bold rounded-full'>
      {children}
    </button>
  )
}

export default Button
