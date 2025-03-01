import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Circle from '../assets/priceshape.png'
import Circle1 from '../assets/circle.png'
import Text from './Text'
import CardCheck from './CardCheck'

const PriceCard = ({Price,Plan,Badge}) => {

  return (
  <>
  <div className="rounded-2xl ">
        <div className="relative group/parent">
            <Flex>
                <div className="relative">
                    <Image imgSrc={Circle} className={''}/>
                    <div className="w-60 h-44 absolute top-2.5 right-3 -z-10 rounded-tr-[50px] bg-gradient-to-r from-[#3661FC] to-[#3661FC] ease-in-out group-hover/parent:from-[#ff7024] group-hover/parent:to-[#ffa951] transition-all duration-700">
                        <Image imgSrc={Badge} className={'absolute right-16 top-12 '}/>
                    </div>
                </div>
            </Flex>
            <div className="absolute top-10 left-12">
                <Text as='p' text={Plan} className='text-black font-bold font-Nunito text-[25px] mb-5'/>
                <Flex className={'gap-x-2 relative px-4'}>
                    <Text as='p' text='$' className='text-2xl font-Dm font-bold text-Parbel inline-block'/>
                    <Text as='p' text={Price} className='text-[46px] font-Nunito font-bold text-Parbel inline-block'/>
                    <Text as='p' text='Per Month' className='text-base font-Dm  text-Grey1 absolute bottom-3 -right-14'/>
                </Flex>
            </div>
            <div className="">

            <div className="absolute group/child top-52 left-16 px-14">
                <CardCheck text={'Free Consultations'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
                <CardCheck text={'Business Planning'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
                <CardCheck text={'Investment Process'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
                <CardCheck text={'Market Research'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
                <CardCheck text={'Online Support'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
                <CardCheck text={'Unlimited Updates'} className={'group-hover/child:ml-6 duration-500'} check={'group-hover/child:opacity-70 duration-500'} plans={'group-hover/child:text-Grey2 duration-500'}/>
            </div>
            </div>
            <div className="absolute left-16 bottom-14 py-4 px-32 border border-Parbel bg-gradient-to-r from-transparent to-transparent group-hover/parent:from-Orange01 group-hover/parent:to-Orange02 group-hover/parent:border-transparent rounded-[50px] transition-all duration-500">
                <Text as='p' text='Choose Plan' className='text-[18px] font-Dm text-black group-hover/parent:text-white duration-300'/>
            </div>
        </div>
  </div>
  </>
  )
}

export default PriceCard