import React from 'react'
import { GoCircle } from 'react-icons/go'
import { GrSearch } from 'react-icons/gr'

const ButtonSearch = ({icon}) => {
  return (
    <>
    <div className="relative">
        <div className="">
            <GoCircle className='text-Parbel text-6xl bg-SearchBG rounded-full'/>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            {icon}
        </div>
    </div>
    </>
  )
}

export default ButtonSearch