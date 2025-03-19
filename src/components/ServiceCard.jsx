import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'

const SErviceCard = ({CardImage,title,para}) => {
  return (
    <>
    <div className="py-6 pl-5 pr-7 mb-5 bg-CardBg rounded-lg">
        <Flex className={'gap-x-5'}>
            <div className="w-16 h-16 bg-white rounded-full px-4 py-5">
                <Image imgSrc={CardImage}/>
            </div>
            <div className="w-[252px]">
                <Text as='p' text={title} className='text-xl font-Dm font-medium text-black mb-3'/>
                <Text as='p' text={para} className='text-base font-Dm  text-Grey1 '/>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default SErviceCard