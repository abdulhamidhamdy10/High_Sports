import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Headhome from './Headhome';
import Bodyhome from './Bodyhome';
import Sectionhome from './Sectionhome';
import Mainhome from './Mainhome';
import Finalhome from './Finalhome';
import ScrollToTop from "react-scroll-to-top";


function AllHomePages() {
  return (
    <div >
      <Navbar />
      <div className='pt-5 mt-5'></div>
      <Headhome />
      <Bodyhome/>
      <div className='pt-5 mt-5'></div>

      <Sectionhome/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>

      <Mainhome/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>
      <Finalhome/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>

      <Footer />

      <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default AllHomePages;