import React from 'react'
import { Col, Container,Row } from 'reactstrap';

function Sectionsportsshoes() {
  return (
    <div className='sectionsportsshoes'>
        <Container fluid className='containerone'>
            <Row className="rowone">
                <Col md="3" className='colone'>
                    <img src="/images/sportsshoes/sectionsportsshoes/71PmnGC2ItL._AC_UL1000_.jpg"></img>
                    <h3>SUEDE</h3>
                </Col>
                <Col md="3" className='coltwo'>
                    <img src="/images/sportsshoes/sectionsportsshoes/868348430.jpg.jpg"></img>
                    <h3>PALERMO</h3>

                </Col>
                <Col md="3" className='colthree'>
                    <img src="/images/sportsshoes/sectionsportsshoes/myshoes.jpg"></img>
                    <h3>MAYEZ</h3>

                </Col>
                <Col md="3" className='colfour'>
                    <img src="/images/sportsshoes/sectionsportsshoes/sneakerallday-mobile.png"></img>
                    <h3>CA PRO</h3>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Sectionsportsshoes;