import React from 'react'
import ServiceDetailBanner from '../../layout/Service Detail Banner/ServiceDetailBanner'
import Flex from '../../components/Flex'
import ServiceDetailLeft from '../../layout/ServiceDetail Left/ServiceDetailLeft'
import ServiceDetailRight from '../../layout/Service Detail Right/ServiceDetailRight'
import Container from '../../components/Container'

const ServiceDetail = () => {
  return (
    <>
    <ServiceDetailBanner/>
    <div className="py-14">
        <Container>
            <Flex>
              <div className="w-2/3">
                <ServiceDetailLeft/>
              </div>
              <div className="w-1/3">
                <ServiceDetailRight/>
              </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ServiceDetail