import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Headsportsaccessories from './Headsportsaccessories';
import Bodysportsaccessories from './Bodysportsaccessories';
import Mainsportsaccessories from './Mainsportsaccessories';
import Sectionsportsaccessories from './Sectionsportsaccessories';
import Lasterspoertsaccessories from './Lasterspoertsaccessories';
import Finalsportsaccessories from './Finalsportsaccessories';
import ScrollToTop from "react-scroll-to-top";

function Allsportsaccessoriespages() {
  return (
    <div className='Allsportsaccessoriespages'>
        <Navbar/>

        <Headsportsaccessories/>

        <Bodysportsaccessories/>

        <Sectionsportsaccessories/>
        <Mainsportsaccessories/>
        <Lasterspoertsaccessories/>
        <Finalsportsaccessories/>
        
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default Allsportsaccessoriespages;