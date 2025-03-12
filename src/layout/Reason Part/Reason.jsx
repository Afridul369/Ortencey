import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Text from '../../components/Text'
import ReasonItem01 from '../../components/ReasonItem01'
import Italy from '../../assets/italy.jpg'
import Square from '../../assets/square.jpg'
import Paris from '../../assets/paris.jpg'
import Icon  from '../../assets/icon01.png'
import WorldMap  from '../../assets/worldmap.png'
import AboutContent from '../../components/AboutContent'

const Reason = () => {
  return (
    <>
    <div className="py-14">
        <Container>
            <Flex>
                <div className="w-1/2 relative">
                    <div className="w-[370px] mb-3">
                        <Image imgSrc={Italy}/>
                    </div>
                    <div className="w-[270px]">
                        <Image imgSrc={Square}/>
                    </div>
                    <div className="w-[370px]  absolute top-16 left-72">
                        <Image imgSrc={Paris} className={''}/>
                    </div>
                </div>

                <div className="w-1/2">
                    <Flex className={'gap-x-3 items-center mb-4'}>
                        <Image imgSrc={Icon}/>
                        <Text as='p' text='Reason of Our Success' className='text-xl font-medium text-Parbel font-Dm '/>
                    </Flex>
                    <Text as='h1' text='Quality & Experience Best  Digital Agency' className='text-[46px] font-bold text-black font-Nunito w-[600px] leading-tight mb-6'/>
                    <Flex className={'gap-x-5 mb-7'}>
                        <ReasonItem01 text={'Our Mission'}/>
                        <ReasonItem01 text={'Our Vision'}/>
                        <ReasonItem01 text={'Our History'}/>
                    </Flex>
                    <Text as='p' text='There are many variations of passages of Lorem Ipsum available, but the majori suffered alteration in some form, by injected humour, or randomised word whic look even sligh believable. If you are going to use.' className='text-base text-Grey1 font-Dm w-[600px] mb-7'/>
                    <Flex className={'gap-x-8'}>
                        <Image imgSrc={WorldMap}/>
                        <div className="">
                            <AboutContent text={'Financial Growth System'}/>
                            <AboutContent text={'Customer Oriented Program Daily'}/>
                            <AboutContent text={'Dedicated Team member'}/>
                            <AboutContent text={'Product ux Design & Development'}/>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Reason