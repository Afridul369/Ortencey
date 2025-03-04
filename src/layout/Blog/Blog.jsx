import React from 'react'
import Flex from '../../components/Flex'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Icon from '../../assets/icon01.png'
import Container from '../../components/Container'
import BlogCard from '../../components/BlogCard'
import Car from '../../assets/car.jpg'
import Compus from '../../assets/compus.webp'
import Money from '../../assets/bmw.jpg'

const Blog = () => {
  return (
    <>
    <div className="py-14">
        <div className="grid place-items-center mb-12">
            <Flex className={'gap-x-3 items-center mb-3'}>
                <Image imgSrc={Icon}/>
                <Text as='p' text='Our Blog' className='text-xl font-medium text-Parbel font-Dm '/>
            </Flex>
            <Text as='h1' text='Latest Blogs & Articles' className='text-[46px] font-bold text-black font-Nunito '/>
        </div>
        <Container>
            <Flex className={'justify-between'}>
                <BlogCard BlogImage={Car} Skill={'Digital Agency'} Subtitle={'25'} Views={'120 Views'} Description={'Successful business partner have a meeting and discussing'}/>  
                <BlogCard BlogImage={Compus} Skill={'Digital Agency'} Subtitle={'25'} Views={'120 Views'} Description={'Successful business partner have a meeting and discussing'}/>  
                <BlogCard BlogImage={Money} Skill={'Digital Agency'} Subtitle={'25'} Views={'120 Views'} Description={'Successful business partner have a meeting and discussing'}/>  
            </Flex>    
        </Container>
    </div>
    </>
  )
}

export default Blog