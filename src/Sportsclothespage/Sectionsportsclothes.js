import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Sectionsportsclothes() {
    return (
        <div className='sectionsportsclothes'>
            <Container fluid className='containerone'>
                <Row className='rowone'>
                    <Col md="6" >
                        <div className='colone'>
                            <h1>MOTANE</h1>
                            <button>SHOP NOW</button>
                        </div>
                    </Col>
                    <Col md="6" >
                        <div className='coltwo'>
                            <h1>PATAGONIA</h1>
                            <button>SHOP NOW</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Sectionsportsclothes