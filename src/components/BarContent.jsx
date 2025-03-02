import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'

const BarContent = ({className,BarImage,Numberr,title}) => {
  return (
    <>
    <div className={`${className}`}>
        <Flex className={'items-center gap-x-5'}>
            <Image imgSrc={BarImage}/>
            <div className="">
                <Text as='p' text={Numberr} className='text-[45px] font-extrabold font-Nunito text-white '/>
                <Text as='p' text={title} className='text-[18px] font-Dm text-white '/>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default BarContent