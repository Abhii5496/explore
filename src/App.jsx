import React from 'react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Offers from './components/Offers.jsx'
import Plan from './components/Plan.jsx'
import Rooms from './components/Rooms.jsx'
import Slider from './components/Slider.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Offers/>
    <Plan/>
    <Rooms/>
    <Slider/>
    <Footer/>
    </>
  )
}

export default App