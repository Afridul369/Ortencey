import React from 'react'
import Text from '../../components/Text'
import AllServiceBox from '../../components/AllServiceBox'
import ServiceMesageBox from '../../components/ServiceMesageBox'
import DownloadBox from '../../components/DownloadBox'

const ServiceDetailRight = () => {
  return (
    <>
    <div className="">
        <AllServiceBox/>
        <ServiceMesageBox/>
        <DownloadBox/>
    </div>
    </>
  )
}

export default ServiceDetailRight