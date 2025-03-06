import React from 'react'
import TopBar from '../../layout/TopBar/TopBar'
import Navbar from '../../layout/Navbar/Navbar'
import AboutBanner from '../../layout/AboutUs Banner/AboutBanner'
import SkillCards from '../../layout/SkillCards/SkillCards'
import AboutOurCompany from '../../layout/AboutOurCompany/AboutOurCompany'
import WhyChoose from '../../layout/WhyChoose/WhyChoose'
import Reason from '../../layout/Reason Part/Reason'

const AboutUs = () => {
  return (
    <>
        <TopBar/>
        <Navbar/>
        <AboutBanner/>
        <SkillCards/>
        <AboutOurCompany/>
        <WhyChoose/>
        <Reason/>
    </>
  )
}

export default AboutUs