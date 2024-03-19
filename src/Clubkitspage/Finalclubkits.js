import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../App.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function Finalclubkits() {
    return (
        <div className='finalClubkits'>
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

                <SwiperSlide className='content'><img className='imgone' src="/images/Clubkits/Finalclubkits/2ffdd3ce731d5204b01e9a4dd76262e1.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgtwo' src="/images/Clubkits/Finalclubkits/camisa-reserva-do-arsenal-2022-2023-adidas-kit-1-removebg-preview-11-7125a553125083bf2316582006703192-640-0.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgeight' src="/images/Clubkits/Finalclubkits/3709026978.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgthree' src="/images/Clubkits/Finalclubkits/701225659DE001_pp_01_mcfc.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgnine' src="/images/Clubkits/Finalclubkits/2ffdd3ce731d5204b01e9a4dd76262e1.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgfour' src="/images/Clubkits/Finalclubkits/adidas_manchester_united_home_jersey_2023_24_front638241649262899545.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgfive' src="/images/Clubkits/Finalclubkits/Arsenal Home Jersey 2023-2024-500x500.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgeleven' src="/images/Clubkits/Finalclubkits/Chelsea-A.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgsix' src="/images/Clubkits/Finalclubkits/701225660AB001_pp_01_mcfc.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/ensemble-juventus-junior-2023-2024-h.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/ensemble-liverpool-2023-2024-ent-vn2.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/ensemble-real-madrid-2023-2024-a.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/ensemble-real-madrid-2023-2024-t.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgtewelv' src="/images/Clubkits/Finalclubkits/71UQkfGDQeL._AC_SX466_.jpg"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgten' src="/images/Clubkits/Finalclubkits/Chelsea_Jerseys.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/81e6KOfoSQL._AC_SL1500_.jpg"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/31701.png"></img></SwiperSlide>
                <SwiperSlide className='content'><img className='imgseven' src="/images/Clubkits/Finalclubkits/31729.png"></img></SwiperSlide>
                
            </Swiper>
        </div>
    );
}





                
