import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Thetable from './Thetable';
import ScrollToTop from "react-scroll-to-top";

function Alltablepages() {
  return (
    <div style={{backgroundColor:"white"}}>
        <Navbar/>
        <Thetable/>
        <div className='mt-5 pt-5'></div>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default Alltablepages;