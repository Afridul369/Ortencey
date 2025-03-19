import React from 'react'
import Text from './Text'
import Button01 from './Button01'
import Button02 from './Button02'

const ServiceMesageBox = () => {
  return (
    <>
    <div className="p-10 bg-MsgBg rounded-3xl mb-12">
        <div className="group relative mb-6">
            <Text as='p' text={'Get a free quote'} className=' text-[25px] font-bold font-Nunito text-white '/>
            <span className="absolute  bottom-0 bg-Orange w-full h-0.5 scale-x-0 group-hover:-scale-x-100 duration-500 "></span>
        </div>
        <input type="text" name="" id="" placeholder='Your Name' className='text-Placeholder text-base font-Dm py-4 px-7 rounded-[50px] w-full mb-5'/>
        <input type="email" name="" id="" placeholder='Your Email Address' className='text-Placeholder text-base font-Dm py-4 px-7 rounded-[50px] w-full mb-5'/>
        <textarea placeholder='Your Message' maxLength={100 }  className=' text-Placeholder text-base font-Dm pt-4 pb-24 px-7 rounded-2xl w-full mb-5'/>
        <Button02 text={'Send Message'}/>
    </div>
    </>
  )
}

export default ServiceMesageBox