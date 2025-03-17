import React from 'react'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Container from '../../components/Container'
import ProssesItem from '../../components/ProssesItem'
import Icon from '../../assets/icon01.png'
import one from '../../assets/01.png'
import two from '../../assets/02.png'
import three from '../../assets/03.png'
import Progres from '../../assets/progres.png'
import Dollar from '../../assets/dollar.png'
import Puzzle from '../../assets/puzzle.png'

const Prosses = () => {
  return (
    <>
    <div className="py-32 bg-ProssesBG bg-no-repeat bg-cover bg-center">
        <div className="text-center mb-12">
            <Flex className={'items-center justify-center gap-x-2 mb-2'}>
                <Image imgSrc={Icon}/>
                <Text as='p' text='Work Prosses' className='text-xl font-medium font-Dm  text-Parbel '/>
            </Flex>
            <Text as='h1' text='How We Work!' className='text-[46px] font-bold font-Nunito text-black '/>
        </div>
        <Container>
            <Flex className={'justify-between'}>
                <ProssesItem number={one} icon={Progres}/>
                <ProssesItem number={two} icon={Dollar}/>
                <ProssesItem number={three} icon={Puzzle}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Prosses