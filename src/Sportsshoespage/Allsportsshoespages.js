import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Homesportsshoes from './Homesportsshoes';
import Bodysportsshoes from './Bodysportsshoes';
import Sectionsportsshoes from './Sectionsportsshoes';
import Finalsportsshoes from './Finalsportsshoes';
import Mainsportsshoes from './Mainsportsshoes';
import ScrollToTop from "react-scroll-to-top";

function Allsportsshoespages() {
  return (
    <div>
      <Navbar />
      <div className='pt-5 mt-5'></div>
      <div className='pt-2 mt-3'></div>
      <Homesportsshoes />
      <div className='pt-5 mt-5'></div>
      <Bodysportsshoes/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>
      <Sectionsportsshoes/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>
      <Mainsportsshoes/>
      <div className='pt-5 mt-5'></div>
      <div className='pt-5 mt-5'></div>
      <Finalsportsshoes/>
      <div className='pt-5 mt-5'></div>
      <Footer />
      <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default Allsportsshoespages;