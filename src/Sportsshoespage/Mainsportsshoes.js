import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Mainsportsshoes() {
    return (
        <div className='mainsportsshoes'>
            <Container className='containerone'>
                <Row className='rowone'>
                    <Col md="4" className='colone'>
                        <h3>Family Fun at Sportsclub Kids</h3>
                        <h1>Fitness for all ages!</h1>
                        <h6>Our 5,500 square foot kid-friendly facility combined with the amenities of Sportsclub Greenville located next door allows us to offer a wide variety of activities including Summer Camp, Afterschool, Kids Night Out and more! Kids of all ages agree that Sportsclub Kids is the best place to be a kid!</h6>
                        <button>LEARN MORE</button>
                    </Col>
                    <Col md="4" className='coltwo'>
                        <img src="/images/sportsshoes/mainsportsshoes/71PmnGC2ItL.jpg"></img>
                        <h1> Cardiovascular Fitness Explained: We’re Answering Your Most Common Cardio Questions</h1>
                        <h6>Our 5,500 square foot kid-friendly facility combined with the amenities of Sportsclub Greenville located next door allows us to offer a wide variety of activities including Summer Camp, Afterschool, Kids Night Out and more! Kids of all ages agree that Sportsclub Kids is the best place to be a kid!</h6>
                        <hr></hr>
                    </Col>
                    <Col md="4" className='colthree'>
                        <Row className='rowone'>
                            <Col md="4" className='colone'>
                                <img src="/images/sportsshoes/mainsportsshoes/Nike-LunarGlide-6-Womens-Running-Shoe-654434_603_G_PREM.jpg"></img>
                                
                            </Col>
                            <Col md="8" className='coltwo'>
                                <h4>MAY 17,2024</h4>
                                <h1> Cardiovascular Fitness Explained: We’re Answering Your Most Common Cardio Questions</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainsportsshoes;