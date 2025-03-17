import React from 'react'

const ButtonHover = ({text,className}) => {
  return (
    <>
    <div className={`${className} relative py-5 px-10 inline-block text-black text-[18px] font-Dm border border-Orange group hover:border-transparent duration-500 cursor-pointer rounded-[50px] bg-CardBg transition-all hover:text-white overflow-hidden`}>
    
      <span className="absolute inset-0 bg-gradient-to-r from-Orange to-OrangeLight opacity-0 transition-opacity duration-300 group-hover:opacity-100  rounded-[50px]"></span>

      <span className="relative z-10">{text}</span>
    </div>
    </>
  )
}

export default ButtonHover