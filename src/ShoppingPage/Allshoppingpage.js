import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Shopping from './Shopping';
import Shoppingtwo from './Shoppingtwo';
import Shoppingthree from './Shoppingthree';
import Shoppingfour from './Shoppingfour';
import Headshopping from './Headshopping';
import ScrollToTop from "react-scroll-to-top";

 function AllShoppingPage() {
  return (
    <div style={{backgroundColor:"white"}}>
        <Navbar/>
        <div className='mt-5 pt-5'></div>
        <div className='mt-1 pt-5'></div>
        <Headshopping/>
          <Shopping/>
          <Shoppingtwo/>
          <Shoppingthree/>
          <Shoppingfour/>
        <Footer/>
        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(0, 162, 255)"}}
        />
    </div>
  )
}
export default AllShoppingPage;
