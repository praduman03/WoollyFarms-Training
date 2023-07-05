import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Alert from '../components/Alert Part/Alert'
import HeroBg from '../assets/Hero-bg.png'
import LeftImg from '../assets/Left Image.png'
import RightImg from '../assets/Right Image.png'
import { BsArrowRight } from "react-icons/bs"

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='hero-part'>
          <img src={HeroBg} alt="hero-bg-img" className='hero-bg' />
          <div>
            <img src={LeftImg} alt="" className='LeftImg' />
            <div className='hero-text'>
              <h1>"Together, We Create Safety"</h1>
              <h3>Strengthen Your Neighborhood, Report Suspicious <br /> Activities, and Stay Informed with Neighborhood Watch</h3>
              <button>Get Started <BsArrowRight /></button>
            </div>
            <img src={RightImg} alt="" className='RightImg' />
          </div>
        </div>
        <Alert />
    </div>
  )
}

export default Home
