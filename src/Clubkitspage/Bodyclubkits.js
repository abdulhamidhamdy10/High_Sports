import React from 'react'
import { Col, Container, Row } from 'reactstrap';

 function Bodyclubkits() {
  return (
    <div className='bodyclubkits'>
        <Container data-wow-duration="1.5s" className='containerone  wow animate__animated animate__fadeInUp'>
            <Row className='rowone'>
                <Col md="4" className='colone'>
                    <h1>Build a strong base for a healthy lifestyle</h1>
                </Col>
                <Col md="4" className='coltwo'>
                    <h1>Lose weight, build body confidence, and improve your posture</h1>
                </Col>
                <Col md="4" className='colthree'>
                    <h1>Create a custom fitness plan to crush your goals faster</h1>
                </Col>
                <Col md="4" className='colfour'>
                    <hr></hr>
                </Col>
                <Col md="4" className='colfive'>
                    <hr></hr>
                </Col>
                <Col md="4" className='colsix'>
                    <hr></hr>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Bodyclubkits;