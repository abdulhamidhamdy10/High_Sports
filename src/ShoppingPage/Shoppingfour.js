import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from 'reactstrap';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/066a178636fa2184787ee5edfa7c58c9.png",
            "name": "ADIDAS",
            "price": 908,
            "id": 30
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/420-4209474_football-goalkeeper-gloves-nike-clipart.png",
            "name": "ADIDAS",
            "price": 1247,
            "id": 31
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/867ab01678d9cf7a0389f6527c99602c.png",
            "name": "ADIDAS",
            "price": 1435,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/AC0009_426_A.png",
            "name": "ADIDAS",
            "price": 873,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/AceFSJunior.png",
            "name": "ADIDAS",
            "price": 789,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/adidas_barricade_iii_tour_3_tennis_racquet_bag_1_grande.png",
            "name": "ADIDAS",
            "price": 1296,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/Baseball-Cap-PNG-Transparent-Image.png",
            "name": "ADIDAS",
            "price": 1475,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/BG0343_414_native_1600.png",
            "name": "ADIDAS",
            "price": 1066,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/brvd_iocn_4.png",
            "name": "ADIDAS",
            "price": 991,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/d89f5d32bd6f4e1abdeb9c7cc3d15d91.png",
            "name": "ADIDAS",
            "price": 1182,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/d0474262b0dcfc323b495c6d50bee342.png",
            "name": "ADIDAS",
            "price": 316,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/dhama_Wrist-band-3-1.png",
            "name": "ADIDAS",
            "price": 1081,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/eddabe09e654d13b1080e10c4a9a77c5.png",
            "name": "ADIDAS",
            "price": 1367,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1wcm9kdWN0LWltYWdlcy11cy1lYXN0LTEiLCJrZXkiOiJjb21iaW5lZFwvRVRTRlMwNDAyXzAwMF8xXC9FVFNGUzA0MDJfMDAwXzIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MDB9fX0=.png",
            "name": "ADIDAS",
            "price": 1335,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/md_195_anklebracestraps_1400x.png",
            "name": "ADIDAS",
            "price": 632,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nike_mercurial_flylite_shin_guard_sp2085_336_1101.png",
            "name": "ADIDAS",
            "price": 1019,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nike-advantage-knitted-ankle-sleeve.png",
            "name": "ADIDAS",
            "price": 475,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nike-charge-youth-shin-guards-p19461-141069_zoom.png",
            "name": "ADIDAS",
            "price": 1111,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nikecourt-tennis-headband-9x0bgG.png",
            "name": "ADIDAS",
            "price": 812,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nike-heritage-hip-pack-p18223-109103_image.png",
            "name": "ADIDAS",
            "price": 759,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/nike-pro-combat-hyperstrong-ankle-sleeve.png",
            "name": "ADIDAS",
            "price": 1336,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/pro-headband-NhZwNm.png",
            "name": "ADIDAS",
            "price": 1462,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/pro-knitted-ankle-sleeve-bHCxTr.png",
            "name": "ADIDAS",
            "price": 1067,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/purepng.com-adidas-bagfashion-bag-object-travel-traveller-luggage-caseclothingadidas-bag-631522327262a8xia.png",
            "name": "ADIDAS",
            "price": 469,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/purepng.com-nike-lazer-bagbagbackpacksnike-lazer-bagtourist-bags-1421526271674pxn0o.png",
            "name": "ADIDAS",
            "price": 794,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/sp0040-101_image.jpg",
            "name": "ADIDAS",
            "price": 627,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/TOROS-GROUP-Comfort-Posture-Corrector.png",
            "name": "ADIDAS",
            "price": 1358,
            "id": 35
        }
    ];
    
    
   
      
     
    return (
        <div className="shoppingfour">
            <Container>
                <Row className="rowone">
                    {products.map((p) => (
                        <Col data-wow-delay="0.1s" className='img-fluid  center' md="3" xs="6" key={p.id}>
                            <div className="colone ">
                                <div className="price">
                                    <h1 className="mt-3" >${p.price}</h1>
                                    <div className="stars">
                                        <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#ffe100" }}></i>
                                        <i class="fa-solid fa-star" style={{ color: "#ffe100", marginRight: "10px" }}></i>5.0 <br />
                                    </div>

                                </div>
                                <div className="imge">
                                <h4 onClick={() => addItem(p)}><i class="fa-regular fa-heart"></i></h4>

                                    <img src={p.image_url} ></img>
                                </div>
                                <h2 className="mt-3" >{p.name}</h2>

                                <h6> {p.features} </h6>
                                {/* <button onClick={() => addItem(p)}>Add to cart</button> */}
                            </div>
                            <hr></hr>

                        </Col>
                    ))}

                    <div className="mt-2 pt-2"></div>

                 
                </Row>
            </Container>

            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

    

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
























