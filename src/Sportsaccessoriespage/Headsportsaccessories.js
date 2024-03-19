import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Headsportsaccessories() {
    return (
        <div className='Headsportsaccessories'>
            <Container className='containerone'>
                <h1>SPORTS ACCSESSORIES</h1>
                <Row className='rowone'>
                    <Col md="4" >
                        <div className='colone'>
                            <div className="card">
                                <div className="card-body">
                                    <h5><div className='text'>MOTIVATION</div></h5>
                                    <h3 className="card-title">Sports accessories are essential tools for</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up for athletes, providing tools for athletes, providing.</p>
                                </div>
                            </div>
                            
                        </div>
                    </Col>



                    <Col md="4" >
                        <div className='coltwo'>
                            <div className="card">
                                <div class="card-body">
                                    <h5><div className='text'>MOTIVATION</div> </h5>
                                    <h3 class="card-title">Marketing strategies focus  functional benefits  </h3>
                                    <p class="card-text">Some quick example text to build on the card title and  the bulk content and technological advancements of sports accessories..</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" > 
                        <div className='colthree'>
                            <div className="card">
                                <div class="card-body">
                                    <h5><div className='text'>MOTIVATION</div> </h5>
                                    <h3 class="card-title">Sports accessory the aspirational aspect  </h3>
                                    <p class="card-text">Some quick example text to build on the card title an content of sports, associating products with values like determination and success..</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}
export default Headsportsaccessories