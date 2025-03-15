import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Text from './Text'

const FunItem = ({Chobi,text,title}) => {
  return (
    <>
    <div className="p-10 bg-CardBg rounded-[20px] inline-block">
        <Flex className={'items-center gap-x-5'}>
            <div className="w-20 h-20 p-5 bg-Parbel rounded-full">
                <Image imgSrc={Chobi}/>
            </div>
            <div className="">
                <Text as='p' text={text} className='text-[46px] font-bold font-Nunito text-black '/>
                <Text as='p' text={title} className='text-xl font-Dm text-Grey1 '/>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default FunItem