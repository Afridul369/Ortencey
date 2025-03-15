import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar/TopBar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Rootlayout = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayout