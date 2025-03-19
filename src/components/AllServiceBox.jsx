import React from 'react'
import Text from './Text'
import ServiceBoxContent from './ServiceBoxContent'

const AllServiceBox = () => {
  return (
    <>
    <div className="">
        <div className="p-10 bg-white rounded-3xl shadow-2xl mb-12">
            <div className="group relative mb-6">
                <Text as='p' text={'Our All Service'} className=' text-[25px] font-bold font-Nunito text-black '/>
                <span className="absolute  bottom-0 bg-Orange w-full h-0.5 scale-x-0 group-hover:-scale-x-100 duration-500 "></span>
            </div>
            <ServiceBoxContent title={'Search Engine Optimization'}/>
            <ServiceBoxContent title={'Web Design & Development'}/>
            <ServiceBoxContent title={'Email and Content Marketing'}/>
            <ServiceBoxContent title={'Social Media Network Marting'}/>
        </div>
    </div>
    </>
  )
}

export default AllServiceBox