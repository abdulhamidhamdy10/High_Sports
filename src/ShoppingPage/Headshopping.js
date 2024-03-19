import React from 'react'
import { Container,Row ,Col } from 'reactstrap';

function Headshopping() {
  return (
    <div className='headshopping'>
        <Container className='containerone'>
            <Row className="rowone">
                <Col md="12" className="colone">
                    <h1>SHOP BY BRAND</h1>
                    <div className='icons'>
                        <img src="/images/footer/392-3926390_white-nike-logo-transparent-download-swoosh.png"></img>
                        <img src="/images/footer/Adidas-Logo-Transparent-Image.png"></img>
                        <img src="/images/footer/company-new-balance-logo-png-20.png"></img>
                        <img src="/images/footer/puma-logo-png-33.jpg"></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Headshopping; 
