import { Col, Container, Row } from "react-bootstrap";
import HorizontalLogo from '../assets/images/horizontal-logo.png'
import {HistoricGraph,Minipooltable} from '../components/Index';

function Team(){
    return <>
            <Container fluid className="main-height">
                <div className="page-margin-top">
                <Row>
                    <Col lg={12}>
                      
                     <Row>
                         <Col lg={5}>
                            <p className="mt-1 p-with-logo">In <img src={HorizontalLogo} className="in-text-logo"/> According our project details, you’re beneficiary of our team program, here you could find the information about the latest deposits made for your wallet address</p>
                         </Col>
                         <Col lg={7}>
                         <div className="mt-5">
                      <div className="payment-first-flex">
                        <div>
                            <span>DATE OF LAST DEPOSIT:  <span className="green">12/02/2022</span></span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                    <div className="payment-first-flex">
                        <div>
                            <span>TOTAL LAST DEPOSIT <span className="green">(USDT)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                  
                    <div className="payment-first-flex">
                        <div>
                            <span>DEPOSIT TO PARTNERSHIP <span className="green">(USD)</span>:</span>
                        </div>
                        <div className="background-green">
                            .
                        </div>
                    </div>
                      </div>
                         </Col>

                     </Row>

                    </Col>


                    <Col lg={4} className="mt-5">
                        <Minipooltable />
                    </Col>

                    <Col lg={8}>
                       <div className="token-section mt-5">
                           <div className="historic-flex">
                           <div>
                           <h5 className="title-section">Historic Graph</h5>
                           <span>DEPOSITS</span>
                           </div>
                           <div className="filter">
                               <div className="flex">
                               <div>
                                   <input type="checkbox"/>
                                   <span>Team</span>
                               </div>
                               <div>
                                   <input type="checkbox"/>
                                   <span>All</span>
                               </div>
                               </div>
                              <div className="flex">
                              <div >
                                   <input type="checkbox"/>
                                   <span>Partners</span>
                               </div>
                               <div>
                                   <input type="checkbox"/>
                                   <span>Token</span>
                               </div>
                              </div>
                              <div className="flex">
                               <div>
                                   <input type="checkbox"/>
                                   <span>Stake - MiniPools</span>
                               </div>
                              </div>
                           </div>
                           </div>
                           <div className="chart-section w-100 mb-3">
                               <HistoricGraph/>
                           </div>
                       </div>
                    </Col>
                  
                </Row>
                </div>
            </Container>
    </>
}
export default Team;