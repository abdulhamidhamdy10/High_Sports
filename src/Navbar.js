import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

function Navbar() {


    return (
        <div >

            <div id="banner" class=" py-2 px-4 text-center">
                
                <p class="text-white text-lg"><span className='high'>HIGH</span><span className='sports'>SPORTS.</span><span className='com'>COM</span></p>
            </div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">

                <div class="home container-fluid">

                    <Link to="/" ><img src='/images/navbar/Untitled-3.png'></img></Link >
                    <span class="target navbar-toggler" type="span" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
                     
                    </span>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* element navbar  */}
                            <li class="nav-item"><Link class="nav-link" to="/Allclubkitspages"><h6>Club kits</h6></Link ></li>
                            <li class="nav-item"><Link class="nav-link" to="/Allsportsclothespages"><h6>Sports Clothes</h6></Link ></li>
                            <li class="nav-item"><Link class="nav-link" to="/Allsportsshoespages"><h6>Sport shoes</h6></Link ></li>
                            <li class="nav-item"><Link class="nav-link" to="/Allsportsaccessories"><h6>Sports accessories</h6></Link></li>

                            {/* element navbar  */}


                        </ul>


                        {/* end navbar  */}
                        <form class="" role="search">
                            <span class="" type="submit"><Link class="nav-link" to="/AllShoppingPage"><h6><i class="fa-regular fa-heart"></i></h6>  </Link></span>
                            <span class="" type="submit"><Link class="nav-link" to="/Alltablepages"><h6><i class="fa-solid fa-cart-shopping"></i></h6> </Link></span>
                            <span class="" type="submit"><Link class="nav-link" to="/Allsignuppages"><h6><i class="fa-solid fa-user"></i></h6> </Link></span>
                        </form>
                        {/* end navbar  */}

                    </div>
                </div>
            </nav>

        </div>




    )
}

export default Navbar;


