import { Col, Container, Row } from "react-bootstrap";
import HorizontalLogo from '../assets/images/horizontal-logo.png'

function Disclaimer(){
    return <>
            <Container fluid className="main-height">
                <div className="page-margin-top">
                <Row className="gy-3">
                    <Col lg={12}>
                      <div className="token-section">
                          <div className="news-height">
                          <h5 className="title-section">DISCLAIMERS</h5>
                          </div>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="token-section">
                          <div className="news-height">
                          <h5 className="title-section">EXCLUSION OF LIABILITY</h5>
                          </div>
                      </div>
                    </Col>
                   
                  
                </Row>
                </div>
            </Container>
    </>
}
export default Disclaimer;