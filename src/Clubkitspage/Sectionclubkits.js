import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Sectionclubkits() {
  return (
    <div className='sectionclubkits'>
        <Container data-wow-duration="1.5s" className='containerone  wow animate__animated animate__fadeInUp'>
            <Row className='rowone'>
                <Col md="7" className='colone'>
                    <img  src="/images/Clubkits/photo-sans-58-648871ea02151.jpg"></img>
                </Col>
                <Col md="5" className='coltwo'>
                    <hr></hr>
                    <h4>Certified Professionals</h4>
                    <h1>Specializing In</h1>
                    <ul type="square">
                        <li>Individuals new to exercise or returning to exercise</li>
                        <li>Individuals with injuries or illnesses</li>
                        <li>Triathletes, runners, cyclists, and endurance athletes</li>
                        <li>Age-specific training from middle school athletes to older adults</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Sectionclubkits ;