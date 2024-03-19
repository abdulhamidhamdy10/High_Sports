import { CartProvider, useCart } from "react-use-cart";
import { Container, Row, Col } from 'reactstrap';

function Page() {
    const { addItem } = useCart();

    const products = [
        {
            "features": "Fashion-forward, Budget-friendly, Chic",
            "image_url": "/images/Clubkits/Finalclubkits/Chelsea_Jerseys.png",
            "name": "NIKE",
            "price": 564,
            "id": 24
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/Clubkits/Finalclubkits/71UQkfGDQeL._AC_SX466_.jpg",
            "name": "PUMA",
            "price": 513,
            "id": 28
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/81e6KOfoSQL._AC_SL1500_.jpg",
            "name": "ADIDAS",
            "price": 398,
            "id": 29
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/31701.png",
            "name": "ADIDAS",
            "price": 647,
            "id": 30
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/31729.png",
            "name": "ADIDAS",
            "price": 829,
            "id": 31
        },
        {
            "features": "Modern, Affordable, Sleek",
            "image_url": "/images/Clubkits/Finalclubkits/ensemble-real-madrid-2023-2024-t.png",
            "name": "ADIDAS",
            "price": 723,
            "id": 35
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/117-1175947_running-shoes-png-image-nike-running-shoe-transparent.png",
            "name": "NIKE",
            "price": 376,
            "id": 24
        },
        {
            "features": "Quality, Accessible, Versatile",
            "image_url": "/images/sportsshoes/Finalsportsshoes/football_boots_PNG49.png",
            "name": "ADIDAS",
            "price": 557,
            "id": 35
        }
    ];
    

    return (
        <div className="shoppingtwo">
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
























