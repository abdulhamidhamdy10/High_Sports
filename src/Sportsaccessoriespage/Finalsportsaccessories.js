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
        <div className='finalsportsaccessories'>

            <Link to="/AllShoppingPage/Shopping"><button className='address'>SHOPPING</button></Link>

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


                {/* <div className="control swiper-button-prev"></div>
                <div className="control swiper-button-next"></div> */}

                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/2z_bags_image_large_sport_duffel_side.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/14fcb9d63dc65489f921c8469a7b6698.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/066a178636fa2184787ee5edfa7c58c9.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/066a178636fa2184787ee5edfa7c58c9.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/867ab01678d9cf7a0389f6527c99602c.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/5143985_976563_stadium_ii_backpack_detail_q118.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/AC0009_426_A.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/AceFSJunior.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/adidas_barricade_iii_tour_3_tennis_racquet_bag_1_grande.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/adidas-wristband-l-white.jpg"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/Baseball-Cap-PNG-Transparent-Image.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/BG0343_414_native_1600.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/brvd_iocn_4.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/d89f5d32bd6f4e1abdeb9c7cc3d15d91.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/d0474262b0dcfc323b495c6d50bee342.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/dhama_Wrist-band-3-1.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/eddabe09e654d13b1080e10c4a9a77c5.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJjb21iaW5lZFwvRVRTRlMwNDAyXzAwMF8xXC9FVFNGUzA0MDJfMDAwXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDB9fX0=.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/md_195_anklebracestraps_1400x.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nike_mercurial_flylite_shin_guard_sp2085_336_1101.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nike-advantage-knitted-ankle-sleeve.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nike-charge-youth-shin-guards-p19461-141069_zoom.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nikecourt-tennis-headband-9x0bgG.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nike-heritage-hip-pack-p18223-109103_image.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/nike-pro-combat-hyperstrong-ankle-sleeve.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/pro-headband-NhZwNm.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/pro-knitted-ankle-sleeve-bHCxTr.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/purepng.com-adidas-bagfashion-bag-object-travel-traveller-luggage-caseclothingadidas-bag-631522327262a8xia.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/purepng.com-nike-lazer-bagbagbackpacksnike-lazer-bagtourist-bags-1421526271674pxn0o.png"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/sp0040-101_image.jpg"></img></SwiperSlide>
                <SwiperSlide><img className='imgone' src="/images/sportsaccessoires/finalsportsaccessories/TOROS-GROUP-Comfort-Posture-Corrector.png"></img></SwiperSlide>
            </Swiper>
        </div>
    );
}
