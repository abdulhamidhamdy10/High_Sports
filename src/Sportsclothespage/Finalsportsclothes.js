import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../App.css';
import { Navigation, Pagination } from 'swiper/modules';

function Finalsportsclothes() {
    return (
        <div className='finalsportsclothes'>
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

                <SwiperSlide><img className='imgone' src="/images/sportsclothes/finalsportsclothes/2e97dac43142c787c4204d295ee7a096.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgtwo' src="/images/sportsclothes/finalsportsclothes/35bf7593-7630-4fa2-b09b-ee4a434f39d1_3.3589324eacd94c02791447aa04ed00ad.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgthree' src="/images/sportsclothes/finalsportsclothes/59b9ad348a1e820e258bc7f0c537bd41.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfour' src="/images/sportsclothes/finalsportsclothes/0175af1454348deffda21e07c97aff6e.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfive' src="/images/sportsclothes/finalsportsclothes/284867_101_PUMA_M LUXTG WOVEN PANT.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgsix' src="/images/sportsclothes/finalsportsclothes/adidas-short-entrada-14-sho-yellow-black-13.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgseven' src="/images/sportsclothes/finalsportsclothes/AJ5882_photo_front_transparent_-_2000x2000.png_cut.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgeight' src="/images/sportsclothes/finalsportsclothes/d454b1cb5c7255f34ee1742844b2e217.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgnine' src="/images/sportsclothes/finalsportsclothes/e969b18341e3e82a9af3a53980dfdf5f.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgten' src="/images/sportsclothes/finalsportsclothes/ell_1504874-01_Fs.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgeleven' src="/images/sportsclothes/finalsportsclothes/greyback_61269BC583CD3.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgtewelv' src="/images/sportsclothes/finalsportsclothes/Jogger-Pant-PNG-Image.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgthirteen' src="/images/sportsclothes/finalsportsclothes/nike-graphic-long-sleeve-t-shirt-mens.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfourteen' src="/images/sportsclothes/finalsportsclothes/nike-laser-woven-printed-shorts-adults-png-16.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgfifteen' src="/images/sportsclothes/finalsportsclothes/nike-womens-sportswear-essential-t-shirt-p9990-48059_image.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgsixteen' src="/images/sportsclothes/finalsportsclothes/Rebel_58729901_black_hi-res.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgseventeen' src="/images/sportsclothes/finalsportsclothes/Rebel_58729901_black_hi-res.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgeigthteen' src="/images/sportsclothes/finalsportsclothes/shorts-transparent-background-9.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgnineteen' src="/images/sportsclothes/finalsportsclothes/t-shirt-2420558_960_720.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgtwinty' src="/images/sportsclothes/finalsportsclothes/weiss-puma-classic-logo-tee-t-shirt-f02.png"></img></SwiperSlide>

            </Swiper>
        </div>
    );
}
export default  Finalsportsclothes;




                




















