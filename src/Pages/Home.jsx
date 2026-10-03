import React from 'react'





import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import AboutEvent from '../Components/AboutEvent'
import { Features } from 'tailwindcss'
import Speakers from '../Components/Speakers'
import Explore from '../Components/Explore'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <AboutEvent/>
      <Features/>
     <Speakers/>
    <Explore/>
    <Footer/>
    </>
  )
}

export default Home
