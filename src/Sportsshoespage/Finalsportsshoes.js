import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../App.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function Finalsportsshoes() {
    return (
        <div className='finalsportsshoes'>
            <Link to="/AllShoppingPage/Shopping"><button className='address'>SHOPPING</button></Link>

{/* 
                <div className="control swiper-button-prev"></div>
                <div className="control swiper-button-next"></div> */}

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >



                <SwiperSlide><img className='imgone' src="/images/sportsshoes/Finalsportsshoes/117-1175947_running-shoes-png-image-nike-running-shoe-transparent.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgtwo' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG30.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgeight' src="/images/sportsshoes/Finalsportsshoes/nike-shoe-png-nike-running-shoes-png-image-transparent-free-download-1200.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgthree' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG33.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgnine' src="/images/sportsshoes/Finalsportsshoes/png-running-shoes-running-shoes-png-image-2984.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfour' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG45.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgten' src="/images/sportsshoes/Finalsportsshoes/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-1701528185627w9ut1.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfive' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG49.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgeleven' src="/images/sportsshoes/Finalsportsshoes/running_shoes_PNG5785.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgsix' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG51.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgtewelv' src="/images/sportsshoes/Finalsportsshoes/shoes-transparent-23.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgseven' src="/images/sportsshoes/Finalsportsshoes/football_boots_PNG58.png"></img></SwiperSlide>


            </Swiper>
        </div>
    );
}
