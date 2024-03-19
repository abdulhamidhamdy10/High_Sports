import React from 'react'
import { Col, Container, Row } from 'reactstrap'

 function Homesportsshoes() {
  return (
    <div className='homesportsshoes'>
        <Container className='containerone'>
            <Row className='rowone'>
                <Col md="6" className='colone'>
                    <h1>The Gamer Tag Pack</h1>
                    <hr></hr>
                    <h6>inspread by classic video games and hardware</h6>
                    <button>Shop Now</button>
                </Col>
                <Col md="6" className='coltwo'>
                    <img src='/images/sportsshoes/home sports shoes/133-1331451_mens-epic-react-flyknit-running-shoe-nike-epic.png'></img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Homesportsshoes