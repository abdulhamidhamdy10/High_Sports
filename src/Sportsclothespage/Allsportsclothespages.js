import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Headsportsclothes from './Headsportsclothes'
import Bodysportsclothes from './Bodysportsclothes'
import Sectionsportsclothes from './Sectionsportsclothes'
import Mainsportsclothes from './Mainsportsclothes'
import Lastersportsclothes from './Lastersportsclothes'
import Finalsportsclothes from './Finalsportsclothes'
import ScrollToTop from "react-scroll-to-top";

function Allsportsclothespages() {
  return (
    <div>
        <Navbar/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-3 pt-2'></div>
        <Headsportsclothes/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Bodysportsclothes/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-3 pt-3'></div>
        <Sectionsportsclothes/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Mainsportsclothes/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Lastersportsclothes/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-5 pt-5'></div>
        <Finalsportsclothes/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default Allsportsclothespages