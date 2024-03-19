import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { CartProvider, useCart } from "react-use-cart";


function Cart() {
    const {
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        totalItems,
        cartTotal,
    } = useCart();

    if (isEmpty) return <h1 className='text-center mb-5'>Your cart is empty</h1>;

    return (
        <div className='thetable'>
            <h1 className="text-center">Cart ({totalUniqueItems})
                <button className="btn btn-danger " onClick={() => emptyCart()}> Delete </button>
            </h1>
            <table>
                    <tr>
                        <td>Total Price</td>
                        <td>${cartTotal}</td>
                    </tr>
                    <tr>
                        <td>Total Items</td>
                        <td>{totalItems}</td>
                    </tr>
                </table>
            <Container className='tablecart'>
                <Row className='rowone mt-5 pt-5'>
                    {items.map((item) => (
                        <Col  md="6"  key={item.id} className='colone'>
                            <Row className='row'>
                                <Col md="6" xs="6" className='colone'>
                                    <img src={item.image_url} alt={item.name} />
                                </Col>
                                <Col md="6" xs="6" className='coltwo'>
                                    <h2>Name: {item.name}</h2>
                                    <h2>Price: {item.price * item.quantity} $</h2>
                                    <h2>Quantity: {item.quantity}</h2>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                    <button onClick={() => removeItem(item.id)}>Delete</button>
                                </Col>
                            <hr/>
                            </Row>
                            {/* <div className="vertical-line"></div> */}
                        </Col>

                    ))}

                </Row>
            </Container>



        </div>
    );
}
function Alltablepage() {
    return (
        <CartProvider>
            <div className='pt-5 mt-5'></div>
            <div className='pt-3 mt-3'></div>
            <Cart />

        </CartProvider>
    )
}
export default Alltablepage;