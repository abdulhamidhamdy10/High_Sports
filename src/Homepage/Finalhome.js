import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Finalhome() {
    return (
        <div className='finalhome'>
            <Container data-wow-duration="1.5s" className='containerone  wow animate__animated animate__fadeInUp'>
                <Row className='rowone'>
                    <Col md="3" className='colone'>
                        <img src="/images/home/finalhome/splash_background_collection__12939.jpg"></img>
                    </Col>
                    <Col md="9" className='coltwo'>
                        <h3><b>“</b>There is something special at Sportsclub that keeps me coming back every single day. From the front desk people who greet you, to the group fitness instructors who are smiling and happy to put you through a quality workout and to the friends who sweat alongside you. This place makes me happy!<b>”</b></h3>
                    </Col>
                </Row>
                <Row className='rowtwo'>
                    <Col md="12" className='colone'>
                        <h1>24</h1>
                        <h4>YEAR MEMBER</h4>
                        <h4>Kerrie S.Greenville</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Finalhome;
