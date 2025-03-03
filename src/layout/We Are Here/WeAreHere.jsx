import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Icon from '../../assets/icon01.png'
import Text from '../../components/Text'
import Button02 from '../../components/Button02'

const WeAreHere = () => {
  return (
    <>
    <div className="py-14">
        <div className="py-20 bg-WeAre bg-DeepNavy">
            <Container>
                <div className="p-20 rounded-[40px] bg-Parbel">
                    <Flex>
                        <div className="w-2/3">
                            <Flex className={'items-center gap-x-3 mb-4'}>
                                <Image imgSrc={Icon}/>
                                <Text as='p' text='We Are Hire' className='text-xl font-Dm font-medium text-white '/>
                            </Flex>
                            <Text as='h1' text='Tell us About Your Business, We are Ready to Solve.' className='text-[46px] font-Nunito font-bold text-white pr-32'/>
                        </div>
                        <div className="w-1/3 relative">
                            <Button02 text={'Contact Us'} className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'}/>
                        </div>
                    </Flex>
                </div>
            </Container>
        </div>
    </div>
    </>
  )
}

export default WeAreHere