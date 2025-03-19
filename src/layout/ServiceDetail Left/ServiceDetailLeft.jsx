import React from 'react'
import Image from '../../components/Image'
import Text from '../../components/Text'
import Flex from '../../components/Flex'
import SErviceCard from '../../components/SErviceCard'
import img from '../../assets/seo.jpg'
import pic1 from '../../assets/servicedetailpic1.png'
import pic2 from '../../assets/servicedetailpic2.png'
import Ratio from '../../assets/ratio.png'
import Kolom from '../../assets/kolom.png'
import Lenden from '../../assets/lenden.png'
import CardCheck from '../../components/CardCheck'
import AboutContent from '../../components/AboutContent'



const ServiceDetailLeft = () => {
  return (
    <>
    <div className="w-2/3">
        <div className="w-[890px]  overflow-hidden mb-8 rounded-3xl ">
            <Image imgSrc={img} className={' '}/>
        </div>
        <Text as='h1' text='Search Engine Optimization' className='text-[25px] font-Nunito font-bold text-black mb-5'/>
        <Text as='p' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat" className='text-base font-Dm text-Grey1 mb-12 pr-20'/>
        <div className="mb-10">
            <Flex className={'gap-x-40 relative'}>          
                <div className="">
                    <Image imgSrc={pic1}/>
                    <Image imgSrc={pic2} className={'absolute top-32 left-32'}/>
                </div>
                <div className="">
                    <Text as='h1' text='Our Service Process' className='text-[25px] font-Nunito font-bold text-black mb-4'/>
                    <SErviceCard CardImage={Ratio} title={"Creative Analysis"} para={"Creative analysis is important. It is common for marketers"}/>
                    <SErviceCard CardImage={Kolom} title={"Design & Scratches"} para={"Creative analysis is important. It is common for marketers"}/>
                    <SErviceCard CardImage={Lenden} title={"Development & Delivery  "} para={"Creative analysis is important. It is common for marketers"}/>
                </div>
            </Flex>
        </div>
        <Text as='h1' text='We Hope You Find What You are Looking for' className='text-[25px] font-Nunito font-bold text-black mb-5'/>
        <Text as='p' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat" className='text-base font-Dm text-Grey1 pr-20 mb-5'/>
        <div className="">
            <AboutContent text={'Research beyond the business plan'}/>
            <AboutContent text={'Customer Oriented Program Daily'}/>
            <AboutContent text={'The ability to turnaround consulting'}/>
            <AboutContent text={'Customer engagement matters'}/>
        </div>
    </div>
    </>
  )
}

export default ServiceDetailLeft