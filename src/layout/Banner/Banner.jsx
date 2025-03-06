import React from 'react'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Container from '../../components/Container'
import Image from '../../components/Image'
import image from '../../assets/bannerimg01.png'
import image2 from '../../assets/vector1.png'
import Button02 from '../../components/Button02'

const Banner = () => {
  return (
    <>
    <div className="bg-Banner bg-no-repeat bg-cover bg-center bg-DarkGrey  py-24 mb-14">
        <Container>
            <Flex className={'justify-between'}>
                <div className="py-24 w-3/5">
                    <Text as='p' text='Your Trusted Ortencey Agency' className='text-[25px] text-Orange font-medium font-Dm '/>
                    <Text as='h1' text='Our Digital Agency With Excellence Services' className='text-[60px] font-bold text-white font-Nunito pb-4'/>
                    <Text as='p' text='The 3 golden rules professional Digital Marketing Agency don’t want you to know about.' className='text-xl font-medium text-white font-Dm pr-52 pb-7'/>
                    <Button02 text={'Discover More'}/>
                </div>
                <div className="w-2/5 relative">
                    <Image imgSrc={image} imgAlt={'image'} className={'relative'}/>
                    <Image imgSrc={image2} imgAlt={'image2'} className={'absolute -top-5 left-16'}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Banner