import React from 'react'
import Container from '../../components/Container'
import FunItem from '../../components/FunItem'
import Flex from '../../components/Flex'
import Setting from '../../assets/setting.png'
import Star from '../../assets/star.png'
import Peoples from '../../assets/peoples.png'
import Trophy from '../../assets/trophy.png'

const FunFact = () => {
  return (
    <>
    <div className="py-14">
        <Container>
            <Flex className={'justify-between flex-wrap '}>
                <FunItem Chobi={Setting} text={'1500 +'} title={'Project Complete'}/>
                <FunItem Chobi={Star} text={'150 +'} title={'Happy Clients'}/>
                <FunItem Chobi={Peoples} text={'95 +'} title={'Professional Team'}/>
                <FunItem Chobi={Trophy} text={'120 +'} title={'Awards Win'}/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default FunFact