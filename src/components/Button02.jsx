import React from 'react'

const Button02 = ({text,className}) => {
  return (
    <>
    <div className={`${className} py-5 px-10 inline-block text-white  rounded-[50px] bg-gradient-to-r from-Orange to-OrangeLight`}>
        {text}
    </div>
    </>
  )
}

export default Button02