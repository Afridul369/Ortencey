import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Icon01 from '../../assets/icon01.png'
import Text from '../../components/Text'

const WhyChoose = () => {
  return (
    <>
    <div className="py-14 bg-WhyShape bg-cover bg-center bg-no-repeat">
        <div className="py-28">        
            <Container>
                <Flex>
                    <div className="w-1/2 pr-20">
                        <Flex className={'items-center gap-x-3 mb-6'}>
                            <Image imgSrc={Icon01} imgAlt={'Icon01'}/>
                            <Text as='p' text='Why Choose Ortencey' className='text-xl font-Dm font-medium text-Parbel'/>
                        </Flex>
                        <Text as='h1' text='Reason For Choosing Our Digital Agency' className='text-[46px] font-Nunito font-bold text-black leading-tight mb-6'/>
                        <Text as='p' text='There are many variations of passages of Lorem Ipsum available, but the majori suffered alteration in some form, by injected humour, or randomised word whic look even sligh believable. If you are going to use.' className='text-base font-Dm text-Grey1 pr-10 leading-tight'/>
                    </div>
                    <div className="w-1/2">
                    
                    </div>
                </Flex>
            </Container>
        </div>
    </div>
    </>
  )
}

export default WhyChoose