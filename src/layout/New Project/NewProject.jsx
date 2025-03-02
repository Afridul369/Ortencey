import React from 'react'
import Container from '../../components/Container'
import Image from '../../components/Image'
import Flex from '../../components/Flex'
import Icon from '../../assets/icon01.png'
import Text from '../../components/Text'
import Button02 from '../../components/Button02'
import BarContent from '../../components/BarContent'
import Settings from '../../assets/settings.png'
import Champion from '../../assets/champion.png'
import People from '../../assets/people.png'


const NewProject = () => {
  return (
    <>
    <div className="pb-14 pt-28">
        <Container>
            <div className="relative">
                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2">
                    <div className="w-[1000px] h-[200px] rounded-full bg-gradient-to-r from-Orange01 to-Orange02 border-8 border-white" >
                        <Flex className={'gap-x-16 px-16  absolute top-1/2 -translate-y-1/2 '}>
                            <BarContent BarImage={Settings} Numberr={'1500'} title={'Project Complate'}/>
                            <BarContent BarImage={Champion} Numberr={'8562'} title={'Satisfied Clients'}/>
                            <BarContent BarImage={People} Numberr={'35'} title={'Awards Win'}/>
                        </Flex>
                    </div>
                </div>
                <div className="bg-Parbel pt-44 pb-20 rounded-[50px] px-16 bg-Project bg-no-repeat bg-cover bg-center">
                    <Flex>
                        <div className="w-1/2">
                            <iframe width="600" height="600" className='rounded-[40px]' src="https://www.youtube.com/embed/YTDHcEJs684?si=7QH-kj14Wx64F-F9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="w-1/2 pl-10">
                            <Flex className={'items-center gap-x-3 mb-6'}> 
                                <Image imgSrc={Icon} imgAlt={'Icon'} />
                                <Text as='p' text='Make an Appointment' className='text-xl font-Dm font-medium text-white '/>
                            </Flex>
                            <Text as='h1' text='Start New Project With Us' className='text-[46px] font-bold font-Nunito text-white mb-11'/>
                            <Flex className={'gap-x-6 mb-5'}>
                                <input type="text" placeholder='Your Name' className='text-base font-Dm text-white py-5 pl-6 pr-24 rounded-full ' />
                                <input type="email" placeholder='Your Email' className='text-base font-Dm text-white py-5 pl-6 pr-24 rounded-full ' />
                            </Flex>
                            <input type="text" placeholder='Business Topic' className='text-base font-Dm text-white py-5 pl-6 pr-[410px] rounded-full mb-5' />
                            <textarea placeholder='Your Message' className='text-base font-Dm text-white  pt-5 pb-20 pl-6 pr-[410px] rounded-3xl mb-10' name="" id="">
                            </textarea>
                            <Button02 text={'Send Message'} className='text-[18px] font-Dm'/>
                        </div>
                    </Flex>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default NewProject