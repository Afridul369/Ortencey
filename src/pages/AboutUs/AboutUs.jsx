import React from 'react'
import AboutBanner from '../../layout/AboutUs Banner/AboutBanner'
import SkillCards from '../../layout/SkillCards/SkillCards'
import AboutOurCompany from '../../layout/AboutOurCompany/AboutOurCompany'
import WhyChoose from '../../layout/WhyChoose/WhyChoose'
import Reason from '../../layout/Reason Part/Reason'
import TeamMember from '../../layout/Team Member/TeamMember'
import FunFact from '../../layout/FunFact/FunFact'

const AboutUs = () => {
  return (
    <>
        <AboutBanner/>
        <SkillCards/>
        <AboutOurCompany/>
        <WhyChoose/>
        <Reason/>
        <TeamMember/>
        <FunFact/>
    </>
  )
}

export default AboutUs