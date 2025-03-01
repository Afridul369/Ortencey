import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Cardimg from '../assets/cardimg.png'
import Text from './Text'

const SkillCard = ({CardImage01,CardImage02, Title}) => {
  return (
    <>
    <div className="">
        <div className=" relative">
            <Image imgSrc={CardImage01} imgAlt={'Design'} className={'absolute top-8 left-12'}/>
            <Image imgSrc={CardImage02} imgAlt={'Rectangle'} className={'absolute -z-10'}/>
            <Image imgSrc={Cardimg} imgAlt={'Cardimg'}/>
        </div>
        <div className="py-7 px-8 bg-CardBg rounded-b-[40px] w-[342px]">
            <Text as='p' text={Title} className='text-[25px] font-Nunito font-bold text-black hover:text-Parbel duration-500 mb-5'/>
            <Text as='p' text='Contrary to popular belief, Lorem Ips is not simply random text. It has root in a piece of classical.' className='text-base font-Dm  text-Grey1 inline-block'/>
        </div>
    </div>
    </>
  )
}

export default SkillCard