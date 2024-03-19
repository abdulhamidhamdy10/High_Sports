import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Lastersportsclothes() {
    return (
        <div className='ortsclotheslastersp'>
            <Container className='containerone'>
                <Row className='rowone'>
                    <Col md="6" className='colone'>
                        <div className='text'>
                            <h1>WELCOME TO THE NEW WORLD OF GORE-TEX</h1>
                            <h6>Whether a cold wind hits you beneath the summit or you are surprised by heavy rain on your morning run GORE-TEX has the answer. Not only is GORE-TEX known for their legendary waterproof protection original collection, their new GORE-TEX INFINIUM collection offers advanced functionality where performance and comfort is a priority but waterproofness isn't.</h6>
                            <h2>READ & SHOP </h2>
                        </div>
                        <div className='images'>
                            {/* <img src="/images/sportsclothes/mainsportsclothes/Adidas-Logo.png"></img> */}
                            <img className='mt-5' src="/images/sportsclothes/mainsportsclothes/nike_PNG12.png"></img>
                        </div>
                    </Col>
                    <Col md="6" className='coltwo'>
                        <img src="/images/sportsclothes/lastersportsclothes/nike-Black-Sportswear-Hooded-Down-Jacket.jpeg"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Lastersportsclothes;