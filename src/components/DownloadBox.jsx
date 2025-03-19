import React from 'react'
import Text from './Text'
import ServiceBoxContent from './ServiceBoxContent'

const DownloadBox = () => {
  return (
    <>
    <div className="p-8 bg-white shadow-xl rounded-3xl">
        <div className="group relative mb-9">
            <Text as='p' text={'Download'} className=' text-[25px] font-bold font-Nunito text-black '/>
            <span className="absolute  bottom-0 bg-Orange w-full h-0.5 scale-x-0 group-hover:-scale-x-100 duration-500 "></span>
        </div>
        <ServiceBoxContent title={'Our Brochures 2023'}/>
        <ServiceBoxContent title={'About Our Company'}/>
    </div>
    </>
  )
}

export default DownloadBox