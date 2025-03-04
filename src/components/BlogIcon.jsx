import React from 'react'
import Flex from './Flex'
import Text from './Text'

const BlogIcon = ({icon,subtitle}) => {
  return (
    <>
    <div className="">
        <Flex className={'items-center gap-x-2'}>
            {icon }
            <Text as='p' text={subtitle} className='text-base font-Dm text-Grey1'/>
        </Flex>
    </div>
    </>
  )
}

export default BlogIcon