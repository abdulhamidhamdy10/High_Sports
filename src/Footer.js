import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Footer() {
  return (
    <div className='footer  pt-5'>
      <Container className='containerone'>

        <Row className='rowone'>
          <Col className='colone' md="3" xs="4">
            <h5 className='mb-4'>SUPPORT</h5>
            <h6>FAQ</h6>
            <h6>Contact Us</h6>
            <h6>Report a Problem</h6>
            <h6>"User Guides</h6>
            <h6>Terms of Service</h6>
            <h6>Privacy Policy</h6>
            <h6>Feedback</h6>
            <h6>whats your</h6>
          </Col>
          <Col className='coltwo' md="3" xs="4">
            <h5 className='mb-4'>CONTACT US</h5>
            <h6>Our Values</h6>
            <h6>Unique Features</h6>
            <h6>Testimonials</h6>
            <h6>Media Coverage</h6>
            <h6>Charitable Initiatives</h6>
            <h6>Contact Information</h6>
            <h6>whats your</h6>
          </Col>
          <Col className='colthree ' md="3" xs="4">
            <h5 className='mb-4'>ABOUT</h5>
            <h6>Who We Are</h6>
            <h6>Our Mission</h6>
            <h6>Our History</h6>
            <h6>Our Team</h6>
            <h6>Accreditations</h6>
            <h6>Partnerships</h6>

          </Col>
          <Col className='colfour' md="3">
            <h5>STAY UP TO DATE</h5>
            <h6>Sign Up for Email</h6>
            <h3>Explore</h3>

          </Col>
        </Row>

        <Row className='rowtwo'>
          <Col md="12" className='colone'>
            <img src='/images/footer/Adidas-Logo-Transparent-Image.png'></img>
            <img src='/images/footer/392-3926390_white-nike-logo-transparent-download-swoosh.png'></img>
            <img src='/images/footer/puma-logo-png-33.jpg'></img>
            <img src='/images/footer/company-new-balance-logo-png-20.png'></img>
          </Col>
        </Row>
        <hr></hr>

      </Container>


      <Container fluid className='containertwo'>
        <Row className='rowone'>
          <Col className='colone' md="4">
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-brands fa-twitter"></i></span>
            <span><i class="fa-brands fa-pinterest"></i></span>
            <span><i class="fa-brands fa-instagram"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
          </Col>
          <Col className='coltwo' md="4">
          <img src='/images/footer/e6e7dd778c447f30661316b2284f5d53.png'></img>
           <h1>EGYPT</h1>
          </Col>
          <Col className='colthree' md="4">
            <h6>© 2024 Copyright:HIGH SPORTS.com</h6>
            <h5>EMPRINT AND LIAGAL DATA</h5>
        <h6></h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Footer;