import React from 'react'
import { Col, Container, Row } from 'reactstrap';

function Mainsportsaccessories() {
  return (
    <div className='mainsportsaccessories'>
        <Container className='containerone'>
            <Row className='rowone'>
                <Col md="8">
                    <div className='colone'>
                        <Row className='row'>
                            <Col md="1" className='colone'>
                                <h5>LASTEST ARTICLE</h5>
                            </Col>
                            <Col md="5" className='coltwo'>
                                <img src="/images/sportsaccessoires/mainsportsaccessories/SP090201-ProS-ClashShinGuards-LS-SanDiego2019-square-749-RGB_800x1026_crop_center@2x.jpg"></img>
                            </Col>
                            <Col md="6" className='colthree'>
                                <h3>THE SUNDAY PLODCAST: PRESENTED BY SPORTSSHOES</h3>
                                <h6>19 FEB 2024</h6>
                                <button>READ MORE </button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md="1">
                </Col>
                <Col md="3">
                    <div className='coltwoo'>
                        <h2>MEET OUR EXPERTS</h2>
                        <h6 className='mt-1 mb-3'>That Never Go </h6>
                        <img src="/images/sportsaccessoires/mainsportsaccessories/Goalkeeper_Glove_For_Professional_Football_Teams.jpg"></img>
                        <h6>Classic Accessories That Never Go Out of Style Discover</h6>
                        <button>FIND OUT MORE</button>
                    </div>
                </Col>

                <Col md="8">
                    <div className='colthree'>
                    <h3>__________________ WHY WE RUN ________________</h3>
                        <img src="/images/sportsaccessoires/mainsportsaccessories/wristband-960x576 (1).jpg"></img>
                    </div>
                </Col>
                <Col md="1"></Col>
                <Col md="3">
                    <div className='colfour'>
                        <h2>GREAT RUN LOCAL</h2>
                        <img src="/images/sportsaccessoires/mainsportsaccessories/HelmetsNFL.jpeg"></img>
                        <h6>Elevate Your Style with the Latest Fashion lorem</h6>
                        <button>FIND OUT MORE</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Mainsportsaccessories;