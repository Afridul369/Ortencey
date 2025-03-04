import React from 'react'
import Image from './Image'
import Car from '../assets/car.jpg'
import Text from './Text'
import Flex from './Flex'
import BlogIcon from './BlogIcon'
import { CiUser } from 'react-icons/ci'
import { LuMessagesSquare } from 'react-icons/lu'
import { IoEyeOutline } from 'react-icons/io5'

const BlogCard = ({BlogImage,Skill,Subtitle,Views,Description}) => {
  return (
    <>
    <div className="">
        <div className="w-[465px]">
            <div className=" overflow-hidden rounded-3xl relative ">
                <Image imgSrc={BlogImage} className={'w-[465px] h-[350px] '}/>
                <div className="p-6 absolute bottom-0 left-0 bg-Parbel inline-block rounded-3xl z-20">
                    <Text as='p' text='09 Dec' className='text-center text-xl font-medium font-Dm text-white'/>
                    <Text as='p' text='2022' className='text-center text-xl font-medium font-Dm text-white'/>
                </div>
                <div className="py-[6px] pr-4 pl-36 bg-violet rounded-3xl absolute bottom-0 left-0 ">
                    <Text as='p' text={Skill} className=' text-base font-Dm text-white'/>
                </div>
            </div>
            <div className="p-7 bg-CardBg ">
                <Flex className={'gap-x-10 mb-4'}>
                    <BlogIcon icon={<CiUser className='text-Parbel text-xl'/>} subtitle={'By Admin'}/>
                    <BlogIcon icon={<LuMessagesSquare className='text-Parbel text-xl'/>} subtitle={Subtitle}/>
                    <BlogIcon icon={<IoEyeOutline  className='text-Parbel text-xl'/>} subtitle={Views}/>
                </Flex>
                <Text as='h1' text={Description} className='text-[25px] font-bold text-Parbel font-Nunito'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCard