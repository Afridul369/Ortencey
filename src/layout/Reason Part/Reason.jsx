import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Italy from '../../assets/italy.jpg'
import Square from '../../assets/square.jpg'
import Paris from '../../assets/paris.jpg'
import Icon  from '../../assets/icon01.png'
import Text from '../../components/Text'

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
                    hjvbkjbkl
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Reason