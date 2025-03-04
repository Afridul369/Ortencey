import React from 'react'
import TopBar from '../../layout/TopBar/TopBar'
import Navbar from '../../layout/Navbar/Navbar'
import Banner from '../../layout/Banner/Banner'
import AboutOurCompany from '../../layout/AboutOurCompany/AboutOurCompany'
import SkillCards from '../../layout/SkillCards/SkillCards'
import WhyChoose from '../../layout/WhyChoose/WhyChoose'
import PricingPlan from '../../layout/PricingPlan/PricingPlan'
import NewProject from '../../layout/New Project/NewProject'
import TeamMember from '../../layout/Team Member/TeamMember'
import Testimonial from '../../layout/Testimonial/Testimonial'
import WeAreHere from '../../layout/We Are Here/WeAreHere'
import Blog from '../../layout/Blog/Blog'

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
    <TeamMember/>
    <Testimonial/>
    <WeAreHere/>
    <Blog/>
    </>
  )
}

export default Home