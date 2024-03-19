import React from 'react'
import { Col, Container, Row } from 'reactstrap'

 function Lasterclubkits() {
  return (
    <div className='lasterclubkits'>
        <Container className='containerone'>
            <Row className='rowone'>
                <Col md="9" className='colone'>
                    <h1>F.I.T. Camp</h1>
                    <h5>F.I.T (Functional Interval Training) is an interval training regime that includes stretching, running, moderate lifting of weights or objects, TRX bands, calisthenics, plyometrics, and carious types of explosive routines.</h5>
                    <h6>F.I.T. Camp is a total body workout designed to push people a little further in their workout than they normally would as well as build camaraderie amongst its participants.  Physical results that can be expected from participating regularly in F.I.T. Camp include cutting weight, increasing cardiovascular efficiency, and toning muscles. F.I.T. Camp is currently only offered at Sportsclub Express Simpsonville.</h6>
                </Col>
                <Col md="3" data-wow-duration="" className='coltwo  wow animate__animated animate__fadeInRight'>
                    <hr></hr>
                    <h3>NEW MEMBER BENEFITS</h3>
                    <h5>Sign up today and get 2 FREE personal training sessions.</h5>
                    <button>JOIN NOW</button>
                </Col>
                <Col md="12" className='colthree'>
                    <h3>NEW MEMBER BENEFITS</h3>
                    <h6>This is a high-intensity interval training (HIIT) workout that incorporates three rounds of seven challenging workout stations designed to improve strength, build muscle and burn fat. No matter how many times a week you attend PEAK level training, each class will always have a different set of exercises awaiting you. Experience all the benefits of personal training in a supportive group environment for all ages, genders and fitness levels. Your first class is FREE!</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Lasterclubkits