import React from 'react'
import Text from '../../components/Text'
import Flex from '../../components/Flex'
import { CgLoadbar } from 'react-icons/cg'

const TeamBanner = () => {
  return (
    <>
    <div className="bg-AboutBG bg-no-repeat bg-cover bg-center bg-DarkGrey pt-40 pb-40 mb-14">
        <div className="text-center">
            <Text as='h1' text='Team' className='text-[46px] font-bold font-Nunito text-white'/>
            <Flex className={'justify-center items-center gap-x-2'}>
                <Text as='p' text='Home' className='text-base font-Dm text-white'/>
                <CgLoadbar className='text-white'/>
                <Text as='p' text='Team' className='text-base font-Dm text-white'/>
            </Flex>
        </div>
    </div>
    </>
  )
}

export default TeamBanner