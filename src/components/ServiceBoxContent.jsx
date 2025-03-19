import React from 'react'
import Text from './Text'
import Flex from './Flex'
import { FaArrowRightLong } from 'react-icons/fa6'

const ServiceBoxContent = ({title}) => {
  return (
    <>
    <div className="py-4 px-6 bg-CardBg rounded-[50px] relative group mb-5">
    <span className="absolute inset-0 bg-gradient-to-r from-Orange to-OrangeLight opacity-0 transition-opacity duration-500 group-hover:opacity-100  rounded-[50px]"></span>
        <Flex className={'items-center justify-between relative z-10 '}>
            <Text as='p' text={title} className='text-xl group-hover:text-white duration-500 font-medium font-Dm text-black'/>
            <FaArrowRightLong className='text-xl group-hover:text-white duration-500'/>
        </Flex>
    </div>
    </>
  )
}

export default ServiceBoxContent