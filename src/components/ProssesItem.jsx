import React from 'react'
import Image from './Image'
import Text from './Text'
import hh from '../assets/progres.png'
import kk from '../assets/prosesshape.png'

const ProssesItem = ({number,icon}) => {
  return (
    <>
    <div className="inline-block">
        <div className="relative z-10">
            <Image imgSrc={kk} />
            <div className="w-36 h-36 bg-Parbel rounded-full absolute top-2 left-6 -z-10"></div>
            <div className="w-24 h-24 bg-gradient-to-r from-Orange to-Orange02 rounded-full hover:bg-Parbel px-6 py-7 absolute top-8 left-12">
                <Image imgSrc={icon}/>
            </div>
            <div className="py-10  w-[250px] absolute top-0 right-8">
                <Text as='p' text='Business Planning' className='text-[25px] font-bold font-Nunito text-black mb-4 hover:text-Parbel duration-300'/>
                <Text as='p' text='There are many variations of pass Lorem Ipsum available, but the a have suffered alteration.' className='text-base font-Dm text-black mb-4'/>
            </div>
            <div className="absolute bottom-6 left-8">
                <Image imgSrc={number}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProssesItem