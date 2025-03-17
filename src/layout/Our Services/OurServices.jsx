import React from 'react'
import Text from '../../components/Text'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Container from '../../components/Container'
import ServiceItem from '../../components/ServiceItem'
import Icon from '../../assets/icon01.png'
import add from '../../assets/add.png'
import web from '../../assets/web.jpg'

const OurServices = () => {
  return (
    <>
    <div className="py-14">
        <div className="text-center mb-12">
            <Flex className={'items-center justify-center gap-x-2 mb-2'}>
                <Image imgSrc={Icon}/>
                <Text as='p' text='Our Services' className='text-xl font-medium font-Dm  bg-gradient-to-r from-Orange01 to-Orange02 bg-clip-text text-transparent '/>
            </Flex>
            <Text as='h1' text='Best Quality Services' className='text-[46px] font-bold font-Nunito text-black '/>
        </div>
        <Container>
            <ServiceItem title={'Search Engine Optimization'} images={add}/>
            <ServiceItem title={'Web Design & Development'} images={add}/>
            <ServiceItem title={'Email and Content Marketing'} images={add}/>
            <ServiceItem title={'Social Media Network Marketing '} images={add}/>

        </Container>
    </div>
    </>
  )
}

export default OurServices