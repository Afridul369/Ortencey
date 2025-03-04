import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Button01 from '../../components/Button01'
import Button03 from '../../components/Button03'

const Footer = () => {
  return (
    <>
    <div className="pt-14">
        <div className="pt-16 pb-40 bg-Footer bg-no-repeat bg-cover bg-center ">
            <Container>
                <Flex className={'justify-between border-b-2 '}>
                    <div className="">
                        <Text as='p' text='For Digital Marketing Agency' className='text-base font-Dm text-white mb-2'/>
                        <Text as='p' text='Join Our Agency Community' className='text-[25px] font-Nunito font-bold text-white '/>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder='Enter your email address'  name="" id="" className='py-7 pl-9 pr-80 text-base font-Dm text-Grey3 rounded-[50px]'/>
                        <Button03 text={'Subscribe Now'} className={'absolute top-1/2 -translate-y-1/2 right-4'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </div>
    </>
  )
}

export default Footer