import React from 'react'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Image from '../../components/Image'
import Usa from '../../assets/usa.png'
import { FaChevronDown,  FaFacebookF,  FaLinkedinIn,  FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { IoIosMail, IoLogoYoutube } from 'react-icons/io'

const TopBar = () => {
  return (
  <>
  <div className="bg-BannerBG">
    <div className="py-2 max-w-[1540px] bg-BlueBg rounded-r-3xl">
        <Flex className={'justify-between'}>
            <Flex className={'pl-44 pr-[340px]'}>
                <Text as="p" text="Welcome to Ortencey Digital Market Agency" className="text-sm font-Dm text-white pr-3.5 border-r border-BorderRight"/>
                <Flex className={'text-xl items-center gap-x-2 px-3.5 pr-3.5 border-r border-BorderRight'}>
                    <FaPhoneAlt className=' '/>
                    <Text as="p" text="+88 ( 5548 ) 6548" className="text-sm font-Dm text-white "/>
                </Flex>
                <Flex className={'text-xl items-center gap-x-2 px-3.5'}>
                    <IoIosMail className=''/>
                    <Text as="p" text="infoyour@gmail.com" className="text-sm font-Dm text-white pr-3.5 "/>
                </Flex>
            </Flex>
            <Flex className={'gap-x-10'}>
                <Flex className={'items-center gap-x-2'}>
                    <Image imgSrc={Usa} imgAlt={'Usa'}/>
                    <Text as="p" text="English" className="text-sm font-Nunito text-white "/>
                    <FaChevronDown className='text-lg text-white'/>
                </Flex>
                <Flex className={'items-center gap-x-3.5 pr-5'}>
                    <FaFacebookF className='text-BorderRight hover:text-[#fea547] duration-300'/>
                    <span className='h-5 w-0.5 bg-BorderRight'></span>
                    <FaLinkedinIn className='text-BorderRight hover:text-[#fea547] duration-300'/>
                    <span className='h-5 w-0.5 bg-BorderRight'></span>   
                    <FaTwitter className='text-BorderRight hover:text-[#fea547] duration-300'/>
                    <span className='h-5 w-0.5 bg-BorderRight'></span>
                    <IoLogoYoutube className='text-BorderRight hover:text-gradie hover:text-[#fea547] duration-300'/>
                </Flex>
            </Flex>        
        </Flex>
    </div>
  </div>
  </>
  )
}

export default TopBar