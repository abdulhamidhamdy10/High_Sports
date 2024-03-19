import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Headsportsclothes() {
  return (
    <div className='headsportsclothes'>
        <Container fluid className='containerone'>
            <Row className='rowone'>
                <Col md="7" className='colone'>
                    <img src="/images/sportsclothes/headersportsclothes/Bodybuilding_Men_511666_2560x1440.jpg"></img>
                </Col>
                <Col md="5" className='coltwo'>
                    <h1><span className='spanone'>SPORTS</span> <span className='spantwo'>CLOTHES</span></h1>
                    <h5>Cardiovascular Fitness Explained: We’re Answering Your Most</h5>
                    <button>EXPLORE MORE</button>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}
export default Headsportsclothes;