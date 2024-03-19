import React from 'react'
import { Col, Container, Row } from 'reactstrap'

 function Bodyhome() {
  return (
    <div className='bodyhome'>
        <Container fluid className='containerone'> 
            <Row className='rowone'>
                <Col md="12" className='colone'>
                    <h1>A few of our most popular fitness activities.</h1>
                </Col>

            </Row>

            <Row className='rowtwo'>
            <Col md="3" className='colone'>
                    <h1>GROUB EXERCISE</h1>
                </Col>
                <Col md="3" className='colttwo'>
                    <h1>SPORTSCLUP</h1>
                </Col>
                <Col md="3" className='colthree'>
                    <h1>PERSONAL TRANING</h1>
                </Col>
                <Col md="3" className='colfour'>
                    <h1>AQUATICS</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Bodyhome