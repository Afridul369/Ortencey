import React from 'react'
import Flex from './Flex'
import Text from './Text'
import { FaCheck } from 'react-icons/fa'

const AboutContent = ({text}) => {
  return (
    <>
    <div className="mb-3">
        <Flex className={'items-center gap-x-3'}>
            <div className="h-5 w-5 rounded-full bg-gradient-to-r p-1 from-Orange to-OrangeLight ">
                <FaCheck className='text-white text-sm pr-1'/>
            </div>
            <Text as='p' text={text} className='text-base font-Dm text-black'/>
        </Flex>
    </div>
    </>
  )
}

export default AboutContent