import React from 'react'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Icon from '../../assets/icon01.png'
import Container from '../../components/Container'
import ButtonHover from '../../components/ButtonHover'

const Support = () => {
  return (
    <>
    <div className="bg-SupportBG bg-no-repeat bg-cover bg-center pt-24 pb-28">
        <Container>
            <div className=" text-center">
                <Flex className={'items-center justify-center gap-x-3 mb-2'}>
                    <Image imgSrc={Icon}/>
                    <Text as='p' text='Let’s Support' className='text-xl font-medium font-Dm  text-white '/>
                </Flex>
                <Text as='h1' text='You need our support to have any projects?' className='mb-7 mx-auto text-[46px] font-bold font-Nunito text-white w-[630px]'/>
                <Text as='p' text='Enthusiastically architect corporate metrics via enterprise methodologies. Progressively extend distinctive process improvements rather than parallel channels.' className='text-xl font-medium font-Dm px-72 mb-12 text-white '/>
                <Flex className={'justify-center gap-x-7'}>
                    <ButtonHover text={'Set Free Quotes'} className={'bg-DarkGrey text-white'}/>
                    <ButtonHover text={'Contact For Us'} className={'bg-DarkGrey text-white'}/>
                </Flex>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Support