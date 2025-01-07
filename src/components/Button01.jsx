import React from 'react'
import Text from './Text'
import Flex from './Flex'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button01 = () => {
  return (
    <>
    <div className="h-12 py-3 px-7 bg-Parbel rounded-[50px] group">
        <Flex className={'items-center gap-x-2'}>
            <Text as='p' text='Free Quote' className='text-white group-hover:text-Menutxt duration-300'/>
            <FaArrowRightLong className='text-white group-hover:text-Menutxt duration-300'/>
        </Flex>
    </div>
    </>
  )
}

export default Button01