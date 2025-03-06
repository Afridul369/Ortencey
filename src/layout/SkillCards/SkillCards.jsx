import React from 'react'
import Container from '../../components/Container'
import Flex from '../../components/Flex'
import SkillCard from '../../components/SkillCard'
import Design from '../../assets/design.png'
import Web from '../../assets/web.png'
import Marketing from '../../assets/marketing.png'
import App from '../../assets/app.png'
import BlueCard from '../../assets/bluecard.png'
import Orangecard from '../../assets/orangecard.png'

const SkillCards = () => {
  return (
    <>
    <div className="py-14">
        <Container className={''}>
            <Flex className={'justify-between  '}>
                <SkillCard CardImage01={Design} CardImage02={BlueCard} Title={'Graphics Design'}/>
                <SkillCard CardImage01={Web} CardImage02={Orangecard} Title={'Web Developer'}/>
                <SkillCard CardImage01={Marketing} CardImage02={BlueCard} Title={'Digital Marketing'}/>
                <SkillCard CardImage01={App} CardImage02={BlueCard} Title={'App Design'}/>
            </Flex>
        </Container>        
    </div>
    </>
  )
}

export default SkillCards