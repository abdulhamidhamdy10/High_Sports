import React from 'react'
import { Container,Row,Col } from 'reactstrap';

 function Sectionhome() {
  return (
    <div className='sectionhome'>
        <Container className='containerone'>
            <Row className="rowone">
                <Col md="6" className="colone">
                    <h4>Best for Life</h4>
                    <h1>World Class Fitness Centers</h1>
                    <h6>At Sportsclub, we know a thing or two about continuous improvement. That’s why we’re consistently reinvesting in our fitness facilities to bring you the luxury amenities you deserve.</h6>
                    <button>SEA ANIMAT AT YOUR LOCAL CLUB</button>
                </Col>
                <Col md="6" className="coltwo">
                    <img src="/images/home/sectionhome/3075776.jpg"></img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Sectionhome;