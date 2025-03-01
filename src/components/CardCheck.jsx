import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import Check01 from '../assets/check01.png'

const CardCheck = ({text,className,check,plans}) => {

  return (
    <>
    <div className="group ">
    <Flex className={`items-center gap-x-4 mb-5 ${className} `}>
        <Image imgSrc={Check01} className={`${check}`}/>
        <Text as='p' text={text} className={`text-lg font-Dm font-medium text-black ${plans} `}/>
    </Flex>
    </div>
    </>
  )
}

export default CardCheck