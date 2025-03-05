import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Button03 from '../../components/Button03'
import Image from '../../components/Image'
import Icon from '../../assets/footicon1.jpg'
import Icon2 from '../../assets/footicon2.jpg'
import { FaCalendarAlt, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <div className="pt-14">
        <div className="pt-16 pb-32 bg-Footer bg-no-repeat bg-cover bg-center ">
            <Container>
                <div className="border-b-2 border-border mb-24">
                    <Flex className={'justify-between mb-24 '}>
                        <div className="">
                            <Text as='p' text='For Digital Marketing Agency' className='text-base font-Dm text-white mb-2'/>
                            <Text as='p' text='Join Our Agency Community' className='text-[25px] font-Nunito font-bold text-white '/>
                        </div>
                        <div className="relative">
                            <input type="text" placeholder='Enter your email address'  name="" id="" className='py-7 pl-9 pr-80 text-base font-Dm text-Grey3 rounded-[50px]'/>
                            <Button03 text={'Subscribe Now'} className={'absolute top-1/2 -translate-y-1/2 right-4'}/>
                        </div>
                    </Flex>
                </div>
                <Flex>
                    <div className="w-[50%]">
                        <Flex className={'gap-x-7'}>
                            <div className="w-[340px] ">
                                <Text as='p' text='About Company' className="text-[25px] font-Nunito font-bold text-white mb-5 after:content'' after:w-24 after:h-[2px] after:bg-gradient-to-r from-Orange01 to-Orange02 after:absolute relative after:-bottom-2 after:left-0  "/>
                                <Text as='p' text='There are many variations of passages of Lore Ipsum availab but the majority have suffereds alteration in some form, by injected humour a randomised words which' className="text-base font-Dm text-footertxt mb-5 "/>  
                                <Flex className={'gap-x-4 '}>
                                    <div className="group">
                                        <div className="w-11 h-11 bg-SearchBG rounded-full relative group/child group-hover:bg-Parbel duration-500">
                                            <FaFacebookF className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-Parbel group-hover:text-white group-hover:scale-125  duration-500'/>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="w-11 h-11 bg-SearchBG rounded-full relative group/child group-hover:bg-Parbel duration-500">
                                            <FaTwitter className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-Parbel group-hover:text-white group-hover:scale-125  duration-500'/>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="w-11 h-11 bg-SearchBG rounded-full relative group/child group-hover:bg-Parbel duration-500">
                                            <FaLinkedinIn className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-Parbel group-hover:text-white group-hover:scale-125  duration-500' />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="w-11 h-11 bg-SearchBG rounded-full relative group/child group-hover:bg-Parbel duration-500">
                                            <FaYoutube className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-Parbel group-hover:text-white group-hover:scale-125  duration-500' />
                                        </div>
                                    </div>
                                </Flex>  
                            </div>
                            <div className="w-[340px]">
                                <Text as='p' text='Featured Services' className="text-[25px] font-Nunito font-bold text-white mb-5 after:content'' after:w-24 after:h-[2px] after:bg-gradient-to-r from-Orange01 to-Orange02 after:absolute relative after:-bottom-2 after:left-0  "/>
                                <ul className='flex flex-col gap-y-3'>
                                    <li className='text-footertxt font-Dm text-base hover:text-Parbel duration-300 marker:text-Parbel'><span className="text-blue-500 text-xl mr-1">•</span> Social Media Marketing</li>
                                    <li className='text-footertxt font-Dm text-base hover:text-Parbel duration-300 marker:text-Parbel'><span className="text-blue-500 text-xl mr-1">•</span> Pay Per Click Management</li>
                                    <li className='text-footertxt font-Dm text-base hover:text-Parbel duration-300 marker:text-Parbel'><span className="text-blue-500 text-xl mr-1">•</span> Search Engine Optimization</li>
                                    <li className='text-footertxt font-Dm text-base hover:text-Parbel duration-300 marker:text-Parbel'><span className="text-blue-500 text-xl mr-1">•</span> Free SEO AnalysisMarketing</li>
                                    <li className='text-footertxt font-Dm text-base hover:text-Parbel duration-300 marker:text-Parbel'><span className="text-blue-500 text-xl mr-1">•</span> Case Studies</li>
                                </ul>
                            </div>
                        </Flex>
                    </div>
                    <div className="w-[50%]">
                        <Flex className={'gap-x-7'}>
                            <div className="w-[270px]">
                                <Text as='p' text='Recent Post' className="text-[25px] font-Nunito font-bold text-white mb-7 after:content'' after:w-24 after:h-[2px] after:bg-gradient-to-r from-Orange01 to-Orange02 after:absolute relative after:-bottom-2 after:left-0 "/>
                                <Flex className={'gap-x-5 mb-5'}>
                                    <div className="w-[100px] h-[70px] mt-3">
                                        <Image imgSrc={Icon} className={'w-full h-full'}/>
                                    </div>
                                    <div className="">
                                        <Text as='p' text='Thoughtful man using laptop pondering ' className="text-base font-Dm text-Grey3 mb-3 "/>
                                        <Flex className={'gap-x-3'}>
                                            <FaCalendarAlt className='text-Parbel'/>
                                            <Text as='p' text='09 Dec 2022' className="text-sm font-Poppins text-Grey3  "/>
                                        </Flex>
                                    </div>
                                </Flex>
                                <Flex className={'gap-x-5'}>
                                    <div className="w-[100px] h-[70px] mt-3">
                                        <Image imgSrc={Icon2} className={'w-full h-full'}/>
                                    </div>
                                    <div className="">
                                        <Text as='p' text='Thoughtful man using laptop pondering ' className="text-base font-Dm text-Grey3 mb-3 "/>
                                        <Flex className={'gap-x-3'}>
                                            <FaCalendarAlt className='text-Parbel'/>
                                            <Text as='p' text='09 Dec 2022' className="text-sm font-Poppins text-Grey3  "/>
                                        </Flex>
                                    </div>
                                </Flex>
                            </div>
                            <div className="w-[300px]">
                                <Text as='p' text='Contact Us' className="text-[25px] font-Nunito font-bold text-white mb-7 after:content'' after:w-24 after:h-[2px] after:bg-gradient-to-r from-Orange01 to-Orange02 after:absolute relative after:-bottom-2 after:left-0 "/>
                                <Flex className={'gap-x-5 mb-4'}>
                                    <IoCall className='text-Parbel text-2xl'/>
                                    <Text as='p' text='+(323) 750-1234 ' className="text-base font-Dm text-Grey3 "/>
                                </Flex>
                                <Flex className={'gap-x-5 mb-4'}>
                                    <IoIosMail className='text-Parbel text-2xl'/>
                                    <Text as='p' text='infoyourortencey@gmail.com' className="text-base font-Dm text-Grey3 "/>
                                </Flex>
                                <Flex className={'gap-x-5 mb-4'}>
                                    <FaLocationDot className='text-Parbel text-2xl'/>
                                    <Text as='p' text='374 FA Tower, William S Blvd, Melbourne 2721, IL, USA' className="text-base font-Dm text-Grey3 "/>
                                </Flex>
                            </div>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
        <div className="py-[22px] bg-Parbel">
            <Container>
                <Flex className={'justify-between'}>
                    <Text as='p' text='2022 © All rights reserved by devsnest-llc' className='text-base font-Dm text-white'/>
                    <Text as='p' text='Privacy Policy | Terms & Conditions' className='text-base font-Dm text-white'/>
                </Flex>
            </Container>
        </div>
    </div>
    </>
  )
}

export default Footer