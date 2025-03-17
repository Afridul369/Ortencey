import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Text from './Text'
import ButtonHover from './ButtonHover'

const ServiceItem = ({images,title}) => {
  return (
    <>
    <div className="p-5 bg-CardBg rounded-[50px] mb-7 border border-transparent hover:border-Orange  duration-300">
        <Flex className={'gap-x-14 items-center'}>
            <div className="">
                <Image imgSrc={images}/>
            </div>
            <div className="w-[700px]">
                <Text as='h1' text={title} className='text-[25px] font-bold font-Nunito text-black mb-5'/>
                <Text as='p' text="There are many variations of passages of Lorem Ipsusm available, but the majority our as have suffered alteration in some form, by injected humour, or randomised word which don't worry a look even sligh believable. If you are going to use a passage." className='text-base font-Dm text-Grey1 '/>
            </div>
            <div className="">
                <ButtonHover text={'Read More'}/>
            </div>
        </Flex>
    </div>
    </>
  )
}

export default ServiceItem