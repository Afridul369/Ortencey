import React from 'react'
import Image from './Image'
import Text from './Text'
import Flex from './Flex'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const MemberCard = ({title,Chobi,Subtitle}) => {
  return (
    <>
    <div className="p-6 bg-white rounded-[30px] inline-block group/parent overflow-y-hidden relative ">
        <Image imgSrc={Chobi} className={'w-72 mb-6'}/>
        <div className="text-center">
            <Text as='h4' text={title} className='text-[25px] font-bold font-Nunito text-black '/>
            <Text as='p' text={Subtitle} className='text-base font-Dm text-Grey1 '/>
        </div>
        <div className="absolute -bottom-[100px] right-0 bg-white h-24 w-full group-hover/parent:bottom-3 rounded-b-[30px] duration-300">
             <div className="relative">
                <Flex className={'absolute top-6 gap-x-3 left-1/2 -translate-x-1/2 '}>
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
        </div>
    </div>
    </>
  )
}

export default MemberCard