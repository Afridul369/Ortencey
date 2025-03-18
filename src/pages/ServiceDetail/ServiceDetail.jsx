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
                <ServiceDetailLeft/>
                <ServiceDetailRight/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default ServiceDetail