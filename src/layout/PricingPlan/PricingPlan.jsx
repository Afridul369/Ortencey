import React from 'react'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Icon01 from '../../assets/icon01.png'
import Text from '../../components/Text'
import Container from '../../components/Container'
import PriceCard from '../../components/PriceCard'
import Circle from '../../assets/circle.png'
import Position from '../../assets/position.png'
import badge from '../../assets/badge.png'

const PricingPlan = () => {
  return (
    <>
    <div className="py-14">
        <div className="grid place-items-center mb-12">
            <div className="">
                <Flex className={'items-center gap-x-2 mb-4'}>
                    <Image imgSrc={Icon01} imgAlt={"Icon01"}/>
                    <Text as='p' text='Our Pricing' className='text-Parbel font-medium font-Dm text-xl'/>
                </Flex>
            </div>
            <div className="">
                <Text as='p' text='Our Best Pricing Plan' className='text-Black01 font-bold font-Nunito text-[46px]'/>
            </div>
        </div>
        <Container>
            <Flex>
                <PriceCard Badge={Circle} Price={'30'} Plan={'Basic Plan'}/>
                <PriceCard Badge={Position} Price={'60'} Plan={'Good Plan'}/>
                <PriceCard Badge={badge} Price={'99'} Plan={'Silver Plan'}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default PricingPlan