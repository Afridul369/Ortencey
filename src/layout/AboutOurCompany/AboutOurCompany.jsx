import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Icon1 from '../../assets/icon01.png'
import Text from '../../components/Text'
import AboutContent from '../../components/AboutContent'
import Button02 from '../../components/Button02'
import Aboutimg from '../../assets/aboutimg.png'

const AboutOurCompany = () => {
  return (
    <>
    <div className="py-14">
        <Container>
            <Flex>
                <div className="w-1/2">
                    <Image imgSrc={Aboutimg} imgAlt={'Aboutimg'}/>
                </div>
                <div className="w-1/2">
                    <Flex className={'items-center gap-x-2 mb-2'}>
                        <Image imgSrc={Icon1} imgAlt={'Icon1'}/>
                        <Text as='p' text='About Our Company' className='text-xl font-medium font-Dm text-Parbel'/>
                    </Flex>
                    <Text as='h1' text='Best Digital Marketing Agency For People' className='text-[46px] font-bold font-Nunito text-black leading-tight mb-9'/>
                    <Text as='p' text="There are many variations of passages of Lorem Ipsum available, but the majority have assuffered alteration in some form, by injected humour, or randomised words which don't a look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything." className='text-base font-Dm text-Grey1  pr-8 mb-8'/>
                    <div className="mb-9">
                        <Flex className={'gap-x-32'}>
                            <div className="">
                                <AboutContent text={'Digital Strategy'}/>
                                <AboutContent text={'Marketing'}/>
                            </div>
                            <div className="">
                                <AboutContent text={'SEO Optimization'}/>
                                <AboutContent text={'First Working Process'}/>
                            </div>
                        </Flex>
                    </div>
                    <Button02 text={'Read More'} className='w-32'/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default AboutOurCompany