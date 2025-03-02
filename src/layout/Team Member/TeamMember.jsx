import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Icon from '../../assets/icon01.png'
import Text from '../../components/Text'
import MemberCard from '../../components/MemberCard'
import Carate from '../../assets/carate.webp'
import Joystick from '../../assets/joystick.webp'
import Compus from '../../assets/compus.webp'
import Mobile from '../../assets/mobile.webp'

const TeamMember = () => {
  return (
    <>
    <div className="py-14">
        <div className="py-28 bg-CardBg">   
            <div className="grid place-items-center">
                <Flex className={'items-center gap-x-3 mb-4'}>
                    <Image imgSrc={Icon}/>
                    <Text as='p' text='Team Member' className='text-xl font-Dm font-medium text-Parbel'/>
                </Flex>
                <Text as='h1' text='Creative Team Member' className='text-[46px] font-bold font-Nunito text-black mb-14'/>
            </div>
            <Container>
                <Flex className={'justify-between'}>
                    <MemberCard Chobi={Carate} title={'Karate King'} Subtitle={'Business Consultant'}/>
                    <MemberCard Chobi={Joystick} title={'Joystick Game'} Subtitle={'Executive Manager'}/>
                    <MemberCard Chobi={Compus} title={'Compus Direction'} Subtitle={'Agency Analysis'}/>
                    <MemberCard Chobi={Mobile} title={'Mobile Mirror'} Subtitle={'Executive Manager'}/>
                </Flex>
            </Container>
            
        </div>
    </div>
    </>
  )
}

export default TeamMember