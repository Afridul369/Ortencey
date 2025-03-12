import React from 'react'
import Text from './Text'

const ReasonItem01 = ({text}) => {
  return (
    <>
    <div className="">
        <div className="relative py-2 px-4 bg-CardBg group rounded-3xl cursor-pointer">
            <span className='absolute  inset-0 bg-gradient-to-r from-Orange01 to-Orange02 opacity-0 hover:opacity-100 rounded-3xl transition-opacity duration-500'></span>
            <span className=' '><Text as='p' text={text} className='text-[18px] font-Dm text-Grey1 group-hover:text-white duration-300 relative z-10 transition-colors'/></span>
        </div>
    </div>
    </>
  )
}

export default ReasonItem01