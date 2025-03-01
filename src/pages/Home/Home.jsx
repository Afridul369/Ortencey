import React from 'react'
import TopBar from '../../layout/TopBar/TopBar'
import Navbar from '../../layout/Navbar/Navbar'
import Banner from '../../layout/Banner/Banner'
import AboutOurCompany from '../../layout/AboutOurCompany/AboutOurCompany'
import SkillCards from '../../layout/SkillCards/SkillCards'
import WhyChoose from '../../layout/WhyChoose/WhyChoose'
import PricingPlan from '../../layout/PricingPlan/PricingPlan'
import NewProject from '../../layout/New Project/NewProject'

const Home = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Banner/>
    <AboutOurCompany/>
    <SkillCards/>
    <WhyChoose/>
    <PricingPlan/>
    <NewProject/>
    </>
  )
}

export default Home