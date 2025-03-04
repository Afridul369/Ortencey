import React from 'react'
import Text from './Text'

const Button03 = ({text,className}) => {
  return (
    <>
    <div className={`py-4 px-8 bg-Parbel rounded-[50px] inline-block ${className}`}>
        <Text as='p' text={text} className='text-white text-[18px] font-Dm  '/>
    </div>
    </>
  )
}

export default Button03