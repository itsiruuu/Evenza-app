import React from 'react'
import NavBar from '../NavBar'
import Banner from '../Banner'
import AboutEvent from '../AboutEvent'
import Features from '../Features'
import Speakers from '../Speakers'
import Explore from '../Explore'
import Video from '../Video'
import Faq from '../Faq'
import Attendees from '../Attendees'
import Customers from '../Customers'
import Stories from '../Stories'
import Footer from '../Footer'


const Home = () => {
  return (
    <>
      <NavBar/>
      <Banner/>
      <AboutEvent/>
      <Features/>
      <Speakers/>
      <Explore/>
      <Attendees/>
      <Video/>
      <Faq/>
      <Customers/>
      <Stories/>
      <Footer/>
    </>
  )
}

export default Home
