import React from 'react'
import Image from '../../components/Image'
import Text from '../../components/Text'
import img from '../../assets/seo.jpg'
import pic1 from '../../assets/servicedetailpic1.png'
import pic2 from '../../assets/servicedetailpic2.png'
import Flex from '../../components/Flex'

const ServiceDetailLeft = () => {
  return (
    <>
    <div className="w-2/3">
        <div className="w-[890px] h-500px] overflow-hidden mb-8 rounded-3xl ">
            <Image imgSrc={img} className={' '}/>
        </div>
        <Text as='h1' text='Search Engine Optimization' className='text-[25px] font-Nunito font-bold text-black mb-5'/>
        <Text as='p' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat" className='text-base font-Dm text-Grey1 mb-12 pr-20'/>
        <div className="">
            <Flex className={'justify-between'}>          
                    <div className="relative">
                        <Image imgSrc={pic1}/>
                        <Image imgSrc={pic2} className={'absolute top-32 left-32'}/>
                    </div>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default ServiceDetailLeft