import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Mainsportsclothes() {
    return (
        <div className='mainsportsclothes'>
            <Container className='containerone'>
                <h1>CHOOSE YOUR BRAND </h1>
                <h4>Evry Session Matters</h4>
                <Row className='rowone'>
                    <Col md="3" className='colone'>
                        <img src="/images/sportsclothes/mainsportsclothes/Adidas-Logo.png" ></img>
                        <button>SHOP NOW</button>
                    </Col>
                    <Col md="3" className='coltwo'>
                        <img src="/images/sportsclothes/mainsportsclothes/nike_PNG12.png" ></img>
                        <button>SHOP NOW</button>
                    </Col>
                    <Col md="3" className='colthree'>
                        <img src="/images/sportsclothes/mainsportsclothes/puma-logo-1-768x385.png" ></img>
                        <button>SHOP NOW</button>
                    </Col>
                    <Col md="3" className='colfour'>
                        <img src="/images/sportsclothes/mainsportsclothes/Logo-New-Balance-negro-1280x593.png" ></img>
                        <button>SHOP NOW</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainsportsclothes