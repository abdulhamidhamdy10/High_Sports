import React from 'react'
import { Container, Row, Col } from 'reactstrap';

function Mainhome() {
    return (
        <div className='mainhome'>
            <Container className='containerone'>
                <Row className="rowone">
                    <Col md="12" className="colone">
                        <h1>The High Sports Difference</h1>
                    </Col>
                </Row>

                <Row className="rowtwo">
                    <Col md="3" className="colone">
                        <img src='/images/home/mainhome/3b-1.jpg'></img>
                        <h6>Sportsclub reinvests money each year to equip our fitness clubs with everything you need for your workouts. From aquatics centers, to upgraded tennis facilities, to full-service fitness floors, we guarantee you’ll love what we have to offer.</h6>
                        <hr></hr>
                        <h3>WORLD CLASS FITNESS CLUBS</h3>
                    </Col>

                    <Col md="3" className="coltwo">
                        <img src='/images/home/mainhome/649977.jpg'></img>
                        <h6>Our industry-leading exercise programming features group exercise classes, personal training options, racquet sport programming and more. To put it simply, there’s something for everyone at Sportsclub Fitness & Wellness.</h6>
                        <hr></hr>
                        <h3>EXERCISE FOR ALL</h3>
                    </Col>

                    <Col md="3" className="colthree">
                        <img src='/images/home/mainhome/AriKnG7.jpg'></img>
                        <h6>When you join Sportsclub, you’re joining more than just a gym. You’re joining a diverse and passionate community. We celebrate with regular social events, fitness partnerships with local businesses and more.</h6>
                        <hr></hr>
                        <h3>COMMUNITY BUILDING</h3>
                    </Col>

                    <Col md="3" className="colfour">
                        <img src='/images/home/mainhome/Zt1o27p.jpg'></img>
                        <h6>When you walk into a Sportsclub fitness club, you’re greeted with a smile. Why? Because at Sportsclub, we put people first. Say hello when you come — we can’t wait to meet you!</h6>
                        <hr></hr>
                        <h3>FRIENDLY TEAM</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Mainhome;