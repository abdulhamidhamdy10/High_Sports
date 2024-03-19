import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Mainclubkits() {
    return (
        <div className='mainclubkits'>
            <Container data-wow-duration="1.5s" className='containerone  wow animate__animated animate__fadeInUp'>
                <Row className='rowone'>
                    <Col md="6" className='colone'>
                        <h4>Proudly Offering</h4>
                        <h1>Programs For Everyone</h1>
                        <h6>A personal trainer can help you lose weight, safely start exercising for the first time, build body confidence, and improve your posture or balance. If you’re a more seasoned exerciser, a personal trainer can help you break a plateau, increase your strength, train for a race or event, increase your cardiovascular endurance, or recover from an injury.</h6>
                        <button>FIND A TRAINER</button>
                    </Col>
                    <Col md="6" className='coltwo'>
                        <img src="/images/Clubkits/2023-24_Bayern_Munich_home_kit_.jpg"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainclubkits