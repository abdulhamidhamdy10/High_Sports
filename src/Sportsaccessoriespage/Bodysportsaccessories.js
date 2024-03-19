import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Bodysportsaccessories() {
  return (
    <div className='bodysportsaccessories'>
      <Container className='containerone'>
        <Row className='rowone'>
          <Col md="8" className='colone'>
            <h4>__________________ CHOOSE A CATEGORY _________________</h4>
            <Row className='rowone'>
              <Col md="4" className='colone'>
                <div className='box'>
                  <h3>TRENDY </h3>
                  <i>Elevate Your Style with the Latest Fashion Statements
                    Stay ahead of the fashion  </i>
                </div>
                <div className='box'>
                  <h3>TIMELESS</h3>
                  <i>Classic Accessories That Never Go Out of Style
                    Discover the epitome of sophistication with our . </i>
                </div>
              </Col>
              <Col md="4" className='coltwo'>
                <div className='box'>
                  <h3>STATEMENT</h3>
                  <i> Bold Accessories to Make a Fashion Statement
                    Make a bold impression with our   </i>
                </div>
                <div className='box'>
                  <h3>EVERYDAY & ESSENTIIALS</h3>
                  <i>Must-Have Accessories for Your Daily Wardrobe
                    Elevate your everyday style with our   </i>
                </div>
              </Col>
              <Col md="4" className='colthree'>
                <div className='box'>
                  <h3>ECO & FRIENDLY</h3>
                  <i> Sustainable Choices for a Greener Fashion Future
                    Embrace sustainability   </i>
                </div>
                <div className='box'>
                  <h3>GLAMOROUS </h3>
                  <i>Sparkle and Shine with Luxurious Accessories
                    Add a touch of  </i>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="1">
          </Col>
          <Col md="3" className='coltwoo'>
            <h3>Welcome!</h3>
            <h6>Welcome to the SportsShoes Running Hub! We’ve teamed up with the experts to bring you the very best advice in all things running - from training</h6>
            <h6>Alongside tips from you, our running community, and the latest news and releases, we hope we’ll inspire you to run stronger, better and happier – because as we know</h6>
            <div className='icon m-auto'>
              <h5> <i class="fa-brands fa-facebook-f"></i></h5>
              <h5><i class="fa-brands fa-instagram"></i></h5>
              <h5><i class="fa-brands fa-twitter"></i></h5>
              <h5><i class="fa-brands fa-youtube"></i></h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Bodysportsaccessories
