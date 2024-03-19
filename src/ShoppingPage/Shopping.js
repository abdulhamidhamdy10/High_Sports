import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';

function Page() {
    const { addItem } = useCart();
    const [heartClicked, setHeartClicked] = useState(false);

    const products = [
        {

            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/2e97dac43142c787c4204d295ee7a096.png",
            "name": "NIKE",
            "price": 689,
            "id": 1,
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsclothes/finalsportsclothes/35bf7593-7630-4fa2-b09b-ee4a434f39d1_3.3589324eacd94c02791447aa04ed00ad.png",
            "name": "PUMA",
            "price": 823,
            "id": 2,
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/sportsclothes/finalsportsclothes/59b9ad348a1e820e258bc7f0c537bd41.png",
            "name": "ADIDAS",
            "price": 122,
            "id": 3,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/0175af1454348deffda21e07c97aff6e.png",
            "name": "NIKE",
            "price": 438,
            "id": 4,
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsclothes/finalsportsclothes/284867_101_PUMA_M LUXTG WOVEN PANT.png",
            "name": "PUMA",
            "price": 819,
            "id": 5,
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/sportsclothes/finalsportsclothes/adidas-short-entrada-14-sho-yellow-black-13.png",
            "name": "ADIDAS",
            "price": 377,
            "id": 6,
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/sportsclothes/finalsportsclothes/AJ5882_photo_front_transparent_-_2000x2000.png_cut.png",
            "name": "ADIDAS",
            "price": 1128,
            "id": 7,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/d454b1cb5c7255f34ee1742844b2e217.png",
            "name": "NIKE",
            "price": 679,
            "id": 8,
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/sportsclothes/finalsportsclothes/e969b18341e3e82a9af3a53980dfdf5f.png",
            "name": "ADIDAS",
            "price": 833,
            "id": 9,
        },

        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/sportsclothes/finalsportsclothes/greyback_61269BC583CD3.png",
            "name": "ADIDAS",
            "price": 722,
            "id": 11,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/Jogger-Pant-PNG-Image.png",
            "name": "NIKE",
            "price": 137,
            "id": 12,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/nike-graphic-long-sleeve-t-shirt-mens.png",
            "name": "NIKE",
            "price": 702,
            "id": 13,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/nike-laser-woven-printed-shorts-adults-png-16.png",
            "name": "NIKE",
            "price": 632,
            "id": 14,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/nike-womens-sportswear-essential-t-shirt-p9990-48059_image.png",
            "name": "NIKE",
            "price": 239,
            "id": 15,
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/Rebel_58729901_black_hi-res.png",
            "name": "NKE",
            "price": 695,
            "id": 16,
        },

        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/sportsclothes/finalsportsclothes/shorts-transparent-background-9.png",
            "name": "NIKE",
            "price": 320,
            "id": 17,
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsclothes/finalsportsclothes/weiss-puma-classic-logo-tee-t-shirt-f02.png",
            "name": "PUMA",
            "price": 239,
            "id": 18,
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/camisa-reserva-do-arsenal-2022-2023-adidas-kit-1-removebg-preview-11-7125a553125083bf2316582006703192-640-0.png",
            "name": "ADIDAS",
            "price": 564,
            "id": 19
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/3709026978.png",
            "name": "ADIDAS",
            "price": 513,
            "id": 20
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/Clubkits/Finalclubkits/701225659DE001_pp_01_mcfc.png",
            "name": "PUMA",
            "price": 398,
            "id": 21
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/Clubkits/Finalclubkits/2ffdd3ce731d5204b01e9a4dd76262e1.png",
            "name": "NIKE",
            "price": 173,
            "id": 22
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/adidas_manchester_united_home_jersey_2023_24_front638241649262899545.png",
            "name": "ADIDAS",
            "price": 312,
            "id": 23
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/Arsenal Home Jersey 2023-2024-500x500.png",
            "name": "ADIDAS",
            "price": 179,
            "id": 25
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/Clubkits/Finalclubkits/Chelsea-A.png",
            "name": "NIKE",
            "price": 675,
            "id": 26
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/Clubkits/Finalclubkits/701225660AB001_pp_01_mcfc.png",
            "name": "PUMA",
            "price": 215,
            "id": 27
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/ensemble-juventus-junior-2023-2024-h.png",
            "name": "ADIDAS",
            "price": 432,
            "id": 32
        },
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/Clubkits/Finalclubkits/ensemble-liverpool-2023-2024-ent-vn2.png",
            "name": "NIKE",
            "price": 567,
            "id": 33
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/ensemble-real-madrid-2023-2024-a.png",
            "name": "ADIDAS",
            "price": 1058,
            "id": 34,
        },
        




    ];

    return (
        <div className="shopping">
            <Container>
                <Row className="rowone">
                    {products.map((p) => (
                        <Col data-wow-delay="0.1s" className='img-fluid center' md="3" xs="6" key={p.id}>
                            <div className="colone">
                                <div className="price">
                                    <h1 className="mt-3">${p.price}</h1>
                                    <div className="stars">
                                        <i className="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#ffe100", marginRight: "10px" }}></i>5.0 <br />
                                    </div>
                                </div>
                                <div className="imge">
                                <h4 onClick={() => addItem(p)}><i class="fa-regular fa-heart"></i></h4>
                                    <img src={p.image_url} alt={p.name} />
                                </div>
                                <h2 className="mt-3">{p.name}</h2>
                                <h6>{p.features}</h6>
                            </div>
                            <hr />
                        </Col>
                    ))}
                    <div className="mt-2 pt-2"></div>
                </Row>
            </Container>
        </div>
    );
}

function Product() {
    return (
        <CartProvider>
            <Page />
        </CartProvider>
    );
}
export default Product;