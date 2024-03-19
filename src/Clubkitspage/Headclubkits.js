import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Headclubkits() {
    return (
        <div className='headclubkits'>
            <h4>Choose your best</h4>
            <h1>FAVOURAITE CLUB KITS </h1>
            <Container fluid className='containerone'>
                <Row className='rowone'>
                    <Col md="4" className='colone'>
                        <h3>Make Lasting Changes One Rep At a Time</h3>
                        <h6>Personal training is the way to get the most from your Sportsclub membership. Our nationally certified professionals  goals are ready to guide and encourage you to achieve your goals.</h6>
                        <button>FIND A TRAINER</button>
                    </Col>
                    <Col md="8" className='coltwo'>
                        <img src="/images/Clubkits/Barcelona_2023-24_home_kit_MI.jpg"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Headclubkits;