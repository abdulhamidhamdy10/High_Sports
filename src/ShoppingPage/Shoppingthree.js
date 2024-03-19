import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from 'reactstrap';

function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG30.png",
            "name": "PUMA",
            "price": 423,
            "id": 28
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/nike-shoe-png-nike-running-shoes-png-image-transparent-free-download-1200.png",
            "name": "ADIDAS",
            "price": 575,
            "id": 29
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG33.png",
            "name": "ADIDAS",
            "price": 332,
            "id": 30
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/png-running-shoes-running-shoes-png-image-2984.png",
            "name": "ADIDAS",
            "price": 659,
            "id": 31
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG45.png",
            "name": "ADIDAS",
            "price": 427,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-1701528185627w9ut1.png",
            "name": "ADIDAS",
            "price": 315,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/running_shoes_PNG5785.png",
            "name": "ADIDAS",
            "price": 722,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG51.png",
            "name": "ADIDAS",
            "price": 507,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/shoes-transparent-23.png",
            "name": "ADIDAS",
            "price": 614,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG58.png",
            "name": "ADIDAS",
            "price": 398,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/2z_bags_image_large_sport_duffel_side.png",
            "name": "PUMA",
            "price": 297,
            "id": 60
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsaccessoires/finalsportsaccessories/14fcb9d63dc65489f921c8469a7b6698.png",
            "name": "ADIDAS",
            "price": 751,
            "id": 50
        }
    ];
    

    return (
        <div className="shoppingthree">
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
                                <h4 onClick={() => addItem(p)}><i class="fa-regular fa-heart"></i></h4>
                            </div>
                            <hr></hr>

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
























