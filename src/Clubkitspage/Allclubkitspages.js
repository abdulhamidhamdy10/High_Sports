import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Headclubkits from './Headclubkits'
import Bodyclubkits from './Bodyclubkits'
import Sectionclubkits from './Sectionclubkits'
import Mainclubkits from './Mainclubkits'
import Finalclubkits from './Finalclubkits'
import Lasterclubkits from './Lasterclubkits'
import ScrollToTop from "react-scroll-to-top";

function Allclubkitspages() {
    return (
        <div className='allclubkitspage'>
            <Navbar />
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Headclubkits />
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Bodyclubkits/>
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Sectionclubkits/>
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Mainclubkits/>
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Lasterclubkits/>
            <div className='pt-5 mt-5'></div>
            <div className='pt-5 mt-5'></div>
            <Finalclubkits/>
            <Footer />
            <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
        </div>
    )
}
export default Allclubkitspages