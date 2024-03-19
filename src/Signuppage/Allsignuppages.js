import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Signup from './Signup'
import ScrollToTop from "react-scroll-to-top";

function Allsignuppages() {
  return (
    <div className='Allsignuppages'>
        <Navbar/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-2 pt-4'></div>
        <Signup/>
        
        <div className='mt-1 pt-1'></div>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default Allsignuppages