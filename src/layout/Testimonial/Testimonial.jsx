import React from 'react'
import Container from '../../components/Container'
import Text from '../../components/Text'
import Image from '../../components/Image'
import Flex from '../../components/Flex'
import Shark from '../../assets/shark.webp'
import Car1 from '../../assets/car1.webp'
import Car2 from '../../assets/car2.webp'
import Camera1 from '../../assets/camera1.webp'
import Camera2 from '../../assets/camera2.webp'
import Metro from '../../assets/metro.webp'
import Jet from '../../assets/jet.webp'
import Icon from '../../assets/icon01.png'
import Colon from '../../assets/colon.png'
import { FaStar } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <>
    <div className="py-14">
        <Container>
            <Flex>
                <div className="w-1/2">
                    <div className="px-11">
                        <Flex className={'gap-x-16'}>
                            <div className="py-24 flex flex-col gap-y-16">
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Shark} imgAlt={'Shark'} className={'w-full'}/>
                                </div>
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Car1} imgAlt={'Car1'} className={'w-full'}/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-16">
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Camera1} imgAlt={'Camera1'} className={'w-full'}/>
                                </div>
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Metro} imgAlt={'Metro'} className={'w-full'}/>
                                </div>
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Jet} imgAlt={'Jet'} className={'w-full'}/>
                                </div>
                            </div>
                            <div className="py-24 flex flex-col gap-y-16">
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Car2} imgAlt={'Car2'} className={'w-full'}/>
                                </div>
                                <div className="overflow-hidden w-36 rounded-3xl">
                                    <Image imgSrc={Camera2} imgAlt={'Camera2'} className={'w-full'}/>
                                </div>
                            </div>
                        </Flex>
                    </div>
                </div>
                <div className="w-1/2 pl-28">
                    <Flex className={'gap-x-3 items-center mb-3'}>
                        <Image imgSrc={Icon}/>
                        <Text as='p' text='Testimonial' className='text-xl font-medium text-Parbel font-Dm '/>
                    </Flex>
                    <Text as='h1' text='What Our Client Say' className='text-[46px] font-bold text-black font-Nunito mb-11 '/>
                    <Flex className={'justify-between mb-8'}>
                        <Image imgSrc={Colon}/>
                        <div className="bg-CardBg rounded-3xl flex items-center px-5 gap-x-1 mr-10">
                            <FaStar className='text-Star text-2xl'/>
                            <FaStar className='text-Star text-2xl'/>
                            <FaStar className='text-Star text-2xl'/>
                            <FaStar className='text-Star text-2xl'/>
                            <FaStar className='text-Star text-2xl'/>
                        </div>
                    </Flex>
                    <Text as='p' text="There are many variations of passages of Lorem Ipsum availa the majority have suffered alteration in some form by injecte our, or rando word which don't look even slightly a believable. If you are going to use a passage of Lorem Ipsum, you need sure there isn't anything embarrassing." className='text-xl text-black font-Dm mb-7'/>
                    <Text as='h2' text='Afridul Hossain' className='text-[25px] text-black font-Nunito font-bold'/>
                    <Text as='p' text='Web Designer' className='text-base text-Grey1 font-Dm '/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Testimonial